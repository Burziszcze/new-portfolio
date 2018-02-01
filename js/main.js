$(document).ready(function() {
  // show preloader
  // $('.preloader').delay(2000).fadeIn(500);
  // open overlay navigation bar
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  // back to home
  $("#home-button").click(function() {
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 500);
    $('#overlay').toggleClass('open');
  });
  // scroll to about section
  $("#about-button").click(function() {
    $('html, body').animate({
      scrollTop: $(".about").offset().top
    }, 1000);
    $('#overlay').toggleClass('open');
  });
  // scroll to works section
  $("#works-button").click(function() {
    $('html, body').animate({
      scrollTop: $('.works').offset().top
    }, 1000);
    $('#overlay').toggleClass('open');
  });
  // scroll to contact-form section
  $("#contact-button").click(function() {
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1000);
    $('#overlay').toggleClass('open');
  });
  // scroll down header button
  $('#scroll-down-button').click(function() {
    $('html, body').animate({
      scrollTop: $('.about').offset().top
    }, 1000);
  });
});
