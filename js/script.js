



$('.main_div').slick({
   dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow:'<i class="fa-solid fa-circle-arrow-left pre myarrows"></i>',
nextArrow:'<i class="fa-solid fa-circle-arrow-right nxt myarrows"></i>'


});



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  ifinite: true,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  prevArrow:'<i class="fa-solid fa-circle-arrow-left pre myarrows"></i>',
nextArrow:'<i class="fa-solid fa-circle-arrow-right nxt2 myarrows"></i>'

});
				



