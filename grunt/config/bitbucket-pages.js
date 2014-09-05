module.exports = {
    options: {
        baseDirectory: 'build-output/website',
        repository: 'git@bitbucket.org:bpsayers/bpsayers.bitbucket.org.git'
    },
    publish: {
        options: {
            siteName: 'bigtwo-' + process.env.TRAVIS_BRANCH
        },
        src: ['build-output/website/*']
    },
    publishProduction: {
        options: {
            siteName: 'bigtwo'
        },
        src: ['build-output/website/*']
    }
};