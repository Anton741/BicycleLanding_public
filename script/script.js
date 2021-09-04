var burger = document.querySelector('.burger_menu');
var menu = document.querySelector('.menu');

burger.addEventListener("click", () =>{
  burger.classList.toggle("burger_menu--active");
  menu.classList.toggle("menu--active");
})


$(document).ready(function(){
  $('.slider__slides').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});;
});