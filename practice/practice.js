//first task
let menuItems = document.querySelectorAll('.item-btn'),
    contentItem = document.getElementsByClassName('content-item');

document.querySelector('.content-box .content-item:first-child').classList.add('active');
document.querySelector('.content-navigation .item-btn:first-child').classList.add('active');

function removeActive(elements){
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
}

menuItems.forEach(function (element) {
    element.onclick = function (event) {
        event.preventDefault();
        let thisAttr = element.getAttribute('data-attr');
        removeActive(menuItems);
        removeActive(contentItem);
        this.classList.add('active');
        document.getElementById(thisAttr).classList.add('active');
    };
});


//second task
let array = new Array(10);
let randomDate = null;
let indexes = [...Array(10).keys()];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

indexes = shuffle(indexes);
console.log('indexes', indexes);

for (let i = 0; i < array.length; i++) {
    randomDate = new Date(Math.floor(Math.random() * 3000), Math.floor(Math.random() * 11),  Math.floor(Math.random() * 31));
    console.log(indexes[i]);
    array[[indexes[i]]] = randomDate;
}
console.log(array);

function goStorage(arr){
    let dateArr = JSON.stringify(arr);
    console.log(dateArr);
    localStorage.setItem("dates", dateArr);
    let returnArr = JSON.parse(localStorage.getItem("dates"));
    console.log(returnArr);

    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }
}
goStorage(array);