// Function to remove page preloader
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('done');

});

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');

let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menu.classList.add('close');
        nav.classList.add('show');
        // navLinks.forEach((item) => item.classList.add('show'));

        //set menu state
        showMenu = true;
    } else {
        menu.classList.remove('close');
        nav.classList.remove('show');
        // navLinks.forEach((item) => item.classList.remove('show'));

        //set menu state
        showMenu = false;
    }
}
