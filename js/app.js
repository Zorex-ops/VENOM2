const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');
const menuCloseButton = document.querySelector('.burger__close');

menuButton.addEventListener("click", () => {
    menu.classList.add("is-active");
    menuCloseButton.classList.add("is-active");
});

menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuCloseButton.classList.remove("is-active");
});