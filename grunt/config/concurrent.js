module.exports = {
    options: {
        logConcurrentOutput: true
    },
    watchUnitTestsAndServer: ['grunt-contrib-watch:server', 'karma:watch']
};
