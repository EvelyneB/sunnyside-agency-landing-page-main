const navBar = document.querySelector('.nav-bar')
const btn = document.querySelector('.hamburger')
const h1 = document.querySelector(".h1")
const arrow = document.querySelector(".arrow")


btn.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
    h1.classList.toggle('invisible');
    arrow.classList.toggle('invisible');
})