const debounce = (wait, funk) => {

    var timer;

    return function(...args) {

        var inner = this;

        clearTimeout(timer);
        timer = setTimeout(function() {
            funk.apply(inner, args);
        }, wait);

    };
};

export default debounce;