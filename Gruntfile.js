module.exports = function (grunt) {
    var customKarmaLaunchers = {
        sauceLabsWindowsChrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'Windows 8.1'
        },
        sauceLabsWindowsFirefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'Windows 8.1'
        },
        sauceLabsWindowsIE11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: '11',
            platform: 'Windows 7'
        },
        sauceLabsWindowsIE10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: '10',
            platform: 'Windows 7'
        },
        sauceLabsMacFirefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'OS X 10.9'
        },
        sauceLabsMacChrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'OS X 10.9'
        },
        sauceLabsMacSafari: {
            base: 'SauceLabs',
            browserName: 'safari',
            platform: 'OS X 10.9'
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        clean: {
            buildOutput: ['build-output']
        },
        karma: {
            options: {
                configFile: 'test/support/karma.config.js',
                customLaunchers: customKarmaLaunchers,
                sauceLabs: {
                    testName: 'bigtwo tests',
                    startConnect: true
                }
            },
            debug: {
                browsers: ['Chrome']
            },
            watch: {
                autoWatch: true
            },
            unit: {
                browsers: [grunt.option('browser') || 'PhantomJS'],
                singleRun: true
            },
            windows: {
                browsers: ['sauceLabsWindowsChrome', 'sauceLabsWindowsFirefox', 'sauceLabsWindowsIE11', 'sauceLabsWindowsIE10'],
                reporters: ['dots', 'saucelabs'],
                singleRun: true
            },
            mac: {
                browsers: ['sauceLabsMacFirefox', 'sauceLabsMacChrome', 'sauceLabsMacSafari'],
                reporters: ['dots', 'saucelabs'],
                singleRun: true
            }
        },
        requirejs: {
            options: {
                baseUrl: 'build-output/js',
                include: ['requirejs'],
                mainConfigFile: 'build-output/js/require.config.js',
                name: 'bigtwo',
                wrap: {
                    start: '/*! bigtwo | (c) 2014 <%= pkg.authors.join(", ") %> | Released under the MIT licence */\n'
                }
            },
            minified: {
                options: {
                    out: 'build-output/website/js/bigtwo.min.js'
                }
            }
        },
        cssmin: {
            minified: {
                files: {
                    'build-output/website/css/bigtwo.min.css': ['src/css/site.css']
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            source: {
                files: {
                    src: ['src/**/*.js', 'test/**/*.js', '!test/support/karma.config.js']
                }
            }
        },
        copy: {
            html: {
                src: 'src/index-minified.html',
                dest: 'build-output/website/index.html'
            },
            img: {
                expand: true,
                cwd: 'src/img',
                flatten: true,
                src: '*',
                dest: 'build-output/website/img/'
            },
            js: {
                expand: true,
                cwd: 'src/js',
                src: '**/*',
                dest: 'build-output/js'
            }
        },
        bump: {
            options: {
                files: ['bower.json'],
                updateConfigs: ['pkg'],
                commitMessage: 'Release %VERSION%',
                commitFiles: ['-a'],
                tagName: '%VERSION%',
                pushTo: 'origin'
            }
        },
        connect: {
            devServer: {
                options: {
                    port: 3000,
                    base: ['src', '.', 'build-output']
                }
            },
            prodServer: {
                options: {
                    port: 4000,
                    base: 'build-output/website',
                    keepalive: true
                }
            }
        },
        filerev: {
            assets: {
                src: ['build-output/website/js/bigtwo.min.js', 'build-output/website/css/bigtwo.min.css', 'build-output/website/img/*']
            }
        },
        usemin: {
            html: 'build-output/website/index.html',
            css: 'build-output/website/css/*',
            options: {
                assetsDirs: ['build-output/website', 'build-output/website/img']
            }
        },
        replace: {
            versionInHtml: {
                src: ['build-output/website/index.html'],
                overwrite: true,
                replacements: [{
                    from: '{{version}}',
                    to: '<%= pkg.version %>'
                }]
            }
        },
        react: {
            compile: {
              files: [
                {
                  expand: true,
                  cwd: 'src/js',
                  src: ['**/*.jsx'],
                  dest: 'build-output/js',
                  ext: '.js'
                }
              ]
            }
          }

    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('build', ['jshint:source', 'clean:buildOutput', 'cssmin:minified', 'copy:js', 'react:compile', 'requirejs:minified', 'copy:html', 'copy:img', 'filerev:assets', 'usemin:html', 'usemin:css', 'replace:versionInHtml']);
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('watch', ['connect:devServer', 'karma:watch']);
    grunt.registerTask('server', ['build', 'connect:prodServer']);
    grunt.registerTask('release', function(versionType) {
        versionType = versionType || 'patch';
        grunt.task.run(['bump-only:' + versionType, 'build', 'test', 'bump-commit']);
    });
    grunt.registerTask('ci', ['test', 'build', 'karma:windows', 'karma:mac']);
    grunt.registerTask('default', ['test', 'build']);
};
