let input = document.querySelector('.search');

function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
        let context = this,
            args = arguments;

        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let returnedFunction = debounce(function() {
    console.log(input.value);
}, 500);
input.addEventListener('keyup', returnedFunction);