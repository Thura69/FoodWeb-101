let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let language_button = document.querySelector('.language_button');
let language_list = document.querySelector('.language_list');

language_button.onclick = () => {
    language_list.classList.toggle('active');   
}

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
}