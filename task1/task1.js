let input = document.querySelector('.search');

const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        const context = this;
        clearInterval(timeout);
        timeout = setInterval(() => func.apply(context, args), delay);
    };
};

input.addEventListener('input', debounce(function() {
    console.log(input.value);
}, 1000));