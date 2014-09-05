module.exports = {
    compile: {
        files: [
            {
                expand: true,
                cwd: 'src/js',
                src: ['**/*.jsx'],
                dest: 'build-output/js',
                ext: '.js'
            }
        ]
    }
};