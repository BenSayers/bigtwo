(function () {
    var configureRequirejsForTesting = function () {
        require.config({
            baseUrl: '/base/src/js',
            paths: {
                'es5-shim': '../../bower_components/es5-shim/es5-shim',
                'jasmine-jquery': '../../bower_components/jasmine-jquery/lib/jasmine-jquery',
                'squire': '../../bower_components/squire/src/Squire',
                'test': '../../test'
            },
            shim: {
                'jasmine-jquery': ['jquery']
            }
        });
    };

    var getTestModuleNames = function () {
        var testModuleNames = [];
        var file;
        for (file in window.__karma__.files) {
            if (window.__karma__.files.hasOwnProperty(file) && /test.*spec\.js$/.test(file)) {
                testModuleNames.push(file);
            }
        }
        return testModuleNames;
    };

    var getTestDependencyModuleNames = function () {
        return ['jasmine-jquery', 'es5-shim'];
    };

    var loadAndRunTests = function (testDependencies, tests) {
        require(testDependencies, function () {
            require(tests, function () {
                return window.__karma__.start();
            });
        });
    };

    configureRequirejsForTesting();
    loadAndRunTests(getTestDependencyModuleNames(), getTestModuleNames());
})();
