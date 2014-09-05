module.exports = {
    html: {
        src: 'src/index-minified.html',
        dest: 'build-output/website/index.html'
    },
    img: {
        expand: true,
        cwd: 'src/img',
        flatten: true,
        src: '*',
        dest: 'build-output/website/img/'
    },
    js: {
        expand: true,
        cwd: 'src/js',
        src: '**/*',
        dest: 'build-output/js'
    }
};