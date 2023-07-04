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

  $(document).ready(function () {
    $('.navbar-toggler').click(function () {
      if ($('.navbar-collapse').hasClass('show')) {
        $('.section').css('padding-top', '0');
      } else {
        $('.section').css('padding-top', $('.navbar').height() + 'px');
      }
    });
  });
  

  