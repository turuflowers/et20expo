$(document).ready(function(){
  $('#carousel_html').flickity({
      // options
      cellAlign: 'center',
      contain: false,
      draggable: true,
      adaptiveHeight: true,
      imagesLoaded: true,
      prevNextButtons: true,
      pageDots: true,
      wrapAround: false,
    groupCells: true,
      fade: true,
      autoPlay: false,
      pauseAutoPlayOnHover: true,
    arrowShape: ''
  });
  
  $('#carousel_diseno').flickity({
    // options
    cellAlign: 'center',
    contain: false,
    draggable: true,
    adaptiveHeight: true,
    imagesLoaded: true,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: false,
    groupCells: true,
    fade: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    arrowShape: ''
  });

$('#carousel_proyectos').flickity({
    // options
    cellAlign: 'center',
    contain: false,
    draggable: true,
    adaptiveHeight: true,
    imagesLoaded: true,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: false,
    groupCells: true,
    fade: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    arrowShape: ''
});

});
    