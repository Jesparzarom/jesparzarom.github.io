
//-----------Script boton "ir arriba"----------------//

$(document).ready(function(){
  $(".scroll-top-button").click(function(){
      $("body, html").animate({
          scrollTop: "0px"
      }, 1000); /* Desplazamiento suave durante 1 segundo */
  });

  $(window).scroll(function(){
      if( $(this).scrollTop() > 0){
          $(".scroll-top-button").fadeIn(300);
      } else {
          $(".scroll-top-button").fadeOut(300);
      }        
  });
}); 




//-----------------------------SCROLL---------------------------//
//-- Script visto de Antonio Almeida -> url: jsfiddle.net/user/promatik/fiddles/ --//

/*  NO FUNCIONA CORRECTAMENTE EN TODOS LOS NAVEGADORES.


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

function handle(delta) {
  var time = 900;
  var distance = 500;

  $('html, body').stop().animate({
      scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );
}

*/
//------------------------------------------------------------//