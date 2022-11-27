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
      autoPlay: 5000,
      pauseAutoPlayOnHover: true,
    arrowShape: ''
  });
});
    