module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        configPath: process.cwd() +  '/grunt/config',
        data: {
            pkg: grunt.file.readJSON('bower.json')
        }
    });

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
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('watch', ['connect:devServer', 'karma:watch']);
    grunt.registerTask('server', ['build', 'connect:prodServer']);
    grunt.registerTask('ci', ['test', 'build', 'karma:windows', 'karma:mac']);
    grunt.registerTask('deploy', ['build', 'bitbucket-pages:publish']);
    grunt.registerTask('deploy-production', ['build', 'bitbucket-pages:publishProduction']);
    grunt.registerTask('default', ['test', 'build']);
};
