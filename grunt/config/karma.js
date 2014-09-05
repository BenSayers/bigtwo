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

    return {
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
    };
};