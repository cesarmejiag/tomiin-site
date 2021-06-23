
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
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
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // MENU MOVIL
  $(".cont_burger").click(function(){
  	$(".burger").toggleClass('active');
  	$("#menu-mobile").slideToggle();
  })
  if( window.innerWidth <= 768 ){
    $("#menu-mobile a").click(function(){
      $(".burger").toggleClass('active');
     $("#menu-mobile").slideToggle();
    });
  };

// CERRAR AVISO
$('#notice .close').on('click', function () {
    $('#notice').slideUp('normal');
});


$('.content-videos .item-video .play video').on('click', function () {
    this.controls = true;
});
$('.content-videos .item-video .play video').on('pause', function () {
    this.controls = false;
});
$('.content-videos .item-video .play video').on('play', function () {
    this.controls = true;
});
