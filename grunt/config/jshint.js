module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    source: {
        files: {
            src: ['src/**/*.js', 'test/**/*.js', '!test/support/karma.config.js']
        }
    }
};