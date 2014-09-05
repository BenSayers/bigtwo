module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        configPath: process.cwd() +  '/grunt/config',
        data: {
            pkg: grunt.file.readJSON('bower.json')
        }
    });

    grunt.loadTasks('grunt/tasks');

    grunt.renameTask('watch', 'grunt-contrib-watch');

    grunt.registerTask('build', [
        'gitinfo',
        'jshint:source',
        'clean:buildOutput',
        'cssmin:minified',
        'copy:js',
        'react:compile',
        'requirejs:minified',
        'copy:html',
        'copy:img',
        'filerev:assets',
        'usemin:html',
        'usemin:css',
        'replace:versionInHtml'
    ]);
    grunt.registerTask('test', ['karma:unit', 'build', 'connect:prodServer', 'jasmine_node:integration']);
    grunt.registerTask('watch', ['connect:devServer', 'concurrent:watchUnitTestsAndServer']);
    grunt.registerTask('watchIntegrationTest', ['grunt-contrib-watch:integrationTest']);
    grunt.registerTask('server', ['build', 'connect:prodServerKeepAlive']);
    grunt.registerTask('ci', ['test', 'karma:windows', 'karma:mac']);
    grunt.registerTask('default', ['test']);
};
