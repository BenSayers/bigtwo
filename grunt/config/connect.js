module.exports = {
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
};