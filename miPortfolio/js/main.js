$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });

  $('.portfolio-title').hover(function() {
    var imgId = $(this).attr('data-img');
    $('.portfolio-img').removeClass('active');
    $('#' + imgId).addClass('active');
  }, function() {
    $('.portfolio-img').removeClass('active');
  });

  ScrollReveal().reveal('.project-image', {
    reset: false,
    delay: 250,
    opacity: 0,
    duration: 1000
});

  