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

  $(function(){
    $(".work-image").hover(
    function() {
        $(this).stop().animate({"opacity": "0.05"}, 350);
    },
    function() {
        $(this).stop().animate({"opacity": "1"}, 350);
    });
  });


});