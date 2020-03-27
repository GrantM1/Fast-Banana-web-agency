$(document).ready(function () {
 $("#toggle-btn").click(function () {
  $('.nav-links').slideToggle(1000);
 })
})

$(window).scroll(function () {
 let scroll = $(window).scrollTop();
 if (scroll >= 0) {
  $('#nav').addClass("new-nav");
 } else {
  $('#nav').removeClass("new-nav");
 }
})


$('nav a').click(function (link) {
 link.preventDefault();
 let traget = $(this).attr("href");
 $('html body').animate({
  scrollTop: $(target).offset().top
 }, "slow");
})