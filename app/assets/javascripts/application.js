// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery.slick
//= require activestorage
//= require turbolinks
//= require materialize-sprockets
//= require_tree .

$(document).ready(function(){
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
$(document).ready(function(){
  setTimeout(function(){
    $('#notice-wrapper').fadeOut("slow", function(){
      $(this).remove();
    })
  }, 3000);
  $('select').formSelect();
});

$(document).on('ready turbolinks:load', function() {
  var elem, instance;
  elem = document.querySelector('#mobile-demo');
  return instance = new M.Sidenav(elem, {});
});

$(document).on('ready turbolinks:before-visit', function() {
  var elem, instance;
  elem = document.querySelector('#mobile-demo');
  instance = M.Sidenav.getInstance(elem);
  return instance.destroy();
});
