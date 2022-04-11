
// Toggle Mobile Menu
const menuBtn = document.querySelector('.mobile_menu_icons')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav_active')
})