define(['jquery'], function () {
    return {
        start: function ($target) {
            $target.append('<h1>Hello World</h1>');
        }
    };
});