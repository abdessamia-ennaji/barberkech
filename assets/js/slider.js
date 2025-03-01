document.addEventListener('DOMContentLoaded', function() {
    var flkty = new Flickity('.hero-image-slider', {
        wrapAround: true,
        autoPlay: 3000,
        cellAlign: 'left',
        contain: true,
        pauseAutoPlayOnHover: false,
        pageDots: true
    });
});