$(document).ready(function() {
  /* For the sticky navigation */
  // ... (Your sticky navigation code can go here)

  /* Smooth scrolling for navigation */
  // Use event delegation for better performance
  $('body').on('click', 'a[href*="#"]:not([href="#"])', function(event) {
    // Check if the link is on the current page
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // Animate scroll
      if ($(hash).length) { // Make sure the target element exists
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          // Add hash to URL after scrolling
          window.location.hash = hash;
        });
      }
    }
  });

  /* Animations on scroll */
  $('.js--section-features').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--section-steps').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  }, {
    offset: '50%'
  });

});