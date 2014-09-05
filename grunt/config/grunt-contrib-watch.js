module.exports = {
    options: {
        atBegin: true
    },
    integrationTest: {
        files: ['src/**/*', 'test/integration/**/*'],
        tasks: ['jasmine_node:integration']
    },
    server: {
        files: ['src/**/*.jsx'],
        tasks: ['react:compile']
    }
};