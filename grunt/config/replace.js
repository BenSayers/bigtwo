module.exports = {
    versionInHtml: {
        src: ['build-output/website/index.html'],
        overwrite: true,
        replacements: [
            {
                from: '{{version}}',
                to: '<%= gitinfo.local.branch.current.shortSHA %>'
            }
        ]
    }
};