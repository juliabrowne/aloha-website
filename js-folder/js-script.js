//document.write("This is your Javascript!");

$(document).ready(function () {

  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
       $("#"+$(this).attr("href").slice(1)+"").focus();
    });
 });


  $(".add-to-cart").click(function () {
    // itemCount++;
    $("#itemCount").css({
      "visibility": "visible"
    });
    var currentQuantity = $("#itemCount").text();
    var newQuantity = parseInt(currentQuantity) + 1;
    $("#itemCount").html(newQuantity);
  });


 $('.submit-button').click(function(e) {
    e.preventDefault();

    var subEmail = $('#subscribe-form').val();
    if (validateEmail(subEmail)) {
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter a valid email.');
    }
  });
});

function validateEmail(subEmail) {
  var filter = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (filter.test(subEmail)) {
    return true;
  } else {
    return false;
  }
}

  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

}); // End of document.ready()