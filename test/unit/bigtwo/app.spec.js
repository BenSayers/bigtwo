define(['squire', 'jquery'], function (Squire, $) {
    describe('bigtwo/app', function () {
        var app;

        beforeEach(function (done) {
            var injector = new Squire();
            injector.require(['bigtwo/app'], function (loadedApp) {
                app = loadedApp;
                done();
            });
        });

        it('should render hello world', function () {
            var $target = $('<div></div>');
            app.start($target);

            expect($target.find('h1')).toHaveText('Hello World');
        });
    });
});