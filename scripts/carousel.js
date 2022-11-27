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
      wrapAround: true,
    groupCells: true,
      fade: true,
      autoPlay: 5000,
      pauseAutoPlayOnHover: true,
      arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 65, y2: 45,
          x3: 20
      }  
  });
});
    