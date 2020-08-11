$(document).ready(function() {
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        window.location.hash = hash;
      });
    }
  });
});

function blinker() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}

setInterval(blinker, 1000);


