// cuando se carga jquery
$(function() {
    
    // Iniciar el carrusel
    $('#carouselMain').carousel();

    // Evento click en las cards
    $('.card').on('click', function() {
        $(this).toggleClass('card-extended');
    });

});