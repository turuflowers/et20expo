var navoffset = 30;

var d1 = $('#intro').offset().top - navoffset;
var d2 = $('#htmlcss3').offset().top - navoffset;
var d3 = $('#css3').offset().top - navoffset;
var d4 = $('#wireframing').offset().top - navoffset;
var d5 = $('#diseno').offset().top - navoffset;
var d6 = $('#proyectos').offset().top - navoffset;

$(window).resize(function () {
    d1 = $('#intro').offset().top - navoffset;
    d2 = $('#htmlcss3').offset().top - navoffset;
    d3 = $('#css3').offset().top - navoffset;
    d4 = $('#wireframing').offset().top - navoffset;
    d5 = $('#diseno').offset().top - navoffset;
    d6 = $('#proyectos').offset().top - navoffset;
})
$(window).scroll(function () {
    if ($(this).scrollTop() >= d1) {
        $('header').addClass('small')
    } else {
        $('header').removeClass('small')
        $('nav a').removeClass('active');
    }

    if ($(this).scrollTop() >= d1 && $(this).scrollTop() <= d2) {
        currentSection(1);
    }
    if ($(this).scrollTop() >= d2 && $(this).scrollTop() <= d3) {
        currentSection(2);
    }
    if ($(this).scrollTop() >= d3 && $(this).scrollTop() <= d4) {
        currentSection(3);
    }
    if ($(this).scrollTop() >= d4 && $(this).scrollTop() <= d5) {
        currentSection(4);
    }
    if ($(this).scrollTop() >= d5 && $(this).scrollTop() <= d6) {
        currentSection(5);
    }
    if ($(this).scrollTop() >= d6) {
        currentSection(6);
    }

});

function currentSection(current) {
    $('nav a').removeClass('active');
    $('nav li:nth-child('+ current + ') a').addClass('active');
}