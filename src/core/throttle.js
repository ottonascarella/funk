// Throttle with "leading execution" without "trailling execution"
const throttle = (wait, funk) => {
    var control = false,
        timer;

    return function(...args) {

        if (control) return;

        control = true;

        clearTimeout(timer);

        funk.apply(this, args);

        timer = setTimeout(function() {
            control = false;
        }, wait);

    };
};

export default throttle;