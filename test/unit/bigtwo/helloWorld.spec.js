define(['squire', 'react', 'jquery'], function (Squire, React, $) {
    describe('bigtwo/helloWorld', function () {
        var helloWorldComponent;
        var $target;

        beforeEach(function (done) {
            $target = $('<div></div>');
            var injector = new Squire();
            injector.require(['bigtwo/helloWorld'], function (loadedHelloWorldComponent) {
                helloWorldComponent = loadedHelloWorldComponent;
                done();
            });
        });

        it('should render hello world', function () {
            React.renderComponent(helloWorldComponent(), $target[0]);
            expect($target).toHaveText('Hello World');
        });
    });
});
