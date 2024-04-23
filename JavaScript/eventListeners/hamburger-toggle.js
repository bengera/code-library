//1. ANY PROJECT
//2. Toggle hamburger menu
const hamMenu = document.querySelector('.nav-toggle');
const navUL = document.querySelector('.navigation-mobile');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navUL.classList.toggle('show');
    
    
});
/* STYLING FOR HAMBURGER
background-color: transparent;
  background-image: url(/img/icon-hamburger.svg);
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-position: center center;
  z-index: 20;
  */