define(['bigtwo/helloWorld', 'react'], function (helloWorld, React) {
    return {
        start: function ($target) {
            React.renderComponent(helloWorld({}), $target[0]);
        }
    };
});
