import {observer} from "./observer.js";
setTimeout(function () {
    let el = document.querySelector('.nav__img').classList.add('nav__img-active');
    console.log(el);
}, 100);

observer('.io');

