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