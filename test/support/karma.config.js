module.exports = function (config) {
    config.set({
        basePath: '../../',
        browsers: ['PhantomJS'],
        captureTimeout: 120000,
        files: [
            'src/js/require.config.js',
            'test/support/test-runner.js',
            {pattern: 'src/**/*.*', included: false},
            {pattern: 'test/**/*.*', included: false},
            {pattern: 'bower_components/**/*.js', included: false}
        ],
        frameworks: ['requirejs', 'jasmine'],
        preprocessors: {
            '**/*.jsx': ['react']
        },
        reporters: ['dots']
    });
};
