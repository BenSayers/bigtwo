module.exports = {
    options: {
        baseUrl: 'build-output/js',
        include: ['requirejs'],
        mainConfigFile: 'build-output/js/require.config.js',
        name: 'bigtwo',
        wrap: {
            start: '/*! bigtwo | (c) 2014 <%= pkg.authors.join(", ") %> | Released under the MIT licence */\n'
        }
    },
    minified: {
        options: {
            out: 'build-output/website/js/bigtwo.min.js'
        }
    }
};