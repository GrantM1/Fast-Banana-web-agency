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
 let target = $(this).attr("href");
 $('html, body').animate({
  scrollTop: $(target).offset().top
 }, "slow");
})

$(function () {
 $("#accordion").accordion({
  animate: 500
 });
});

// progress bars

$(function () {
 $("#p-bar-1").progressbar({
  value: 37
 });
});
$(function () {
 $("#p-bar-2").progressbar({
  value: 70
 });
});
$(function () {
 $("#p-bar-3").progressbar({
  value: 60
 });
});
$(function () {
 $("#p-bar-4").progressbar({
  value: 80
 });
});