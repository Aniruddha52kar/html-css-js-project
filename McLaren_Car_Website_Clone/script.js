// <a href = "#" class = "menu"</a> => is ko run kare ge
// toggle menu btn 

function toggleMenu() {
    const menu = document.querySelector('.menu');
    //nav ka variable declear karo 
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active')
    menu.classList.toggle('active');
}