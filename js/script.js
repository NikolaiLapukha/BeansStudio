document.addEventListener("click", menu);
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');
const portfolioItem = document.querySelectorAll('.portfolio__item');
function menu (event){
      if(event.target.closest('.header__burger')){
            headerMenu.classList.toggle('active');
            headerBurger.classList.toggle('active');
      };
      if((!event.target.closest('.header__burger')) && (!event.target.closest('.header__menu'))){
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
      };
};