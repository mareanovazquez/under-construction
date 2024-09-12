$(document).ready(function () {

  // Mostrar y ocultar botón "Volver arriba"

  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function () {

    var proyectosOffsetTop = $('#principal').offset().top;

    if ($(window).scrollTop() >= proyectosOffsetTop) {

      btnVolverArriba.css('margin-left', 0);

    }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {

      btnVolverArriba.css('margin-left', '-60px');

    }

  })



});
