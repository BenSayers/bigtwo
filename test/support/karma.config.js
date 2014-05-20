module.exports = function (config) {
    config.set({
        basePath: '../../',
        browsers: ['PhantomJS'],
        captureTimeout: 120000,
        files: [
            'src/js/require.config.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
            'test/support/test-runner.js',
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'test/**/*.js', included: false},
            {pattern: 'bower_components/**/*.js', included: false}
        ],
        frameworks: ['requirejs', 'jasmine'],
        reporters: ['dots']
    });
};