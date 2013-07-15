// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs

$(document).ready(function(){
  var $nav = $('#container');
  var $about = $('#about');
  var $work = $('#work');
  var $contact = $('#contact');
  var top = $nav.offset().top;
  var bottom = top + $nav.height();

  $nav.scroll(function() {
    if($about.offset().top < bottom) {
        $('#nav-about').css('color', '#CCC');
    } else if ($work.offset().top < bottom) {
        $('#nav-work').css('color', '#CCC');
    } else if ($contact.offset().top < bottom) {
        $('#nav-contact').css('color', '#CCC');
    }
  });

  $('#about').css('height', window.screen.availHeight - 200);
  $('#contact').css('height', window.screen.availHeight - 200);

  $('body').on('click', '#nav-about', function(e) {
    e.preventDefault();
    $('html,body').stop().animate({scrollTop: $('#about').offset().top}, 500);
  });
  $('body').on('click', '#nav-work', function(e) {
    e.preventDefault();
    $('html,body').stop().animate({scrollTop: $('#work').offset().top}, 500);
  });
  $('body').on('click', '#nav-photography', function(e) {
    e.preventDefault();
    $('html,body').stop().animate({scrollTop: $('#photography').offset().top}, 500);
  });
  $('body').on('click', '#nav-contact', function(e) {
    e.preventDefault();
    $('html,body').stop().animate({scrollTop: $('#contact').offset().top}, 500);
  });

  $(function(){
    $(".work-image").hover(
    function() {
        $(this).stop().animate({"opacity": "0.05"}, 350);
    },
    function() {
        $(this).stop().animate({"opacity": "1"}, 350);
    });
  });

  $(function(){
    $(".personal-logo img").hover(
    function() {
        $(this).stop().animate({"opacity": "0"}, 350);
    },
    function() {
        $(this).stop().animate({"opacity": "1"}, 350);
    });
  });

});