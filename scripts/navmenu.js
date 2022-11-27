$(window).resize(function() {
    var w = $(window).width();
    if(w > 991){
        $("header").removeClass('active');
        $('.hamburger').removeClass('active');
        $(".navegacion").removeClass('active');
        $(".subnav").removeClass('active');
    }
});
$(document).ready(function () {
  $('.hamburger').on('click', function () {
      $("header").toggleClass('active');
      $(this).toggleClass('active');
      $(".navegacion").toggleClass('active');
      $(".subnav").removeClass('active');
  });

  $('nav a').on('click', function () {
      $('nav a').removeClass('active');
      $(this).addClass('active');
      $("header").removeClass('active');
      $('.hamburger').removeClass('active');
      $(".navegacion").removeClass('active');
      $(".subnav").removeClass('active');
  });

  $('nav button').on('click', function(){
    var subnav = $(this).next();
    if(subnav.hasClass('active')){
      subnav.removeClass('active');
      
    }else{
      $('.subnav').removeClass('active');
      subnav.addClass('active');
    }
  });
  $('nav .volver').on('click', function(){
    var subnav = $(this).parent();
    subnav.removeClass('active');
  });
});