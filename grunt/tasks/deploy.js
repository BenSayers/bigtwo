module.exports = function (grunt) {
    grunt.registerTask('deploy', function () {
        var bitbucketTask = (process.env.TRAVIS_BRANCH === 'production') ? 'publishProduction' : 'publish';
        grunt.task.run(['build', 'bitbucket-pages:' + bitbucketTask]);
    });
};