Template.pageNotLoggedIn.rendered = function () {

  // make the hero 100% of the remaining body
  var height = $(window).height() - $('.navbar').height(),
      $heroWrap = $('#hero-wrap');
  $heroWrap.height( height);
  $('#hero').css({
    'paddingTop': ( height - $('#hero').height() ) / 6
  });
  // alter h2 based on screen size
  $('h2').fitText(1.2, { minFontSize: '40px', maxFontSize: '60px' });
  $('section h2').fitText(1.2, { minFontSize: '40px', maxFontSize: '45px' });

  $('.btn-scroll').on('click', function () {
    var $this = $(this);

    $('html, body').animate({
        scrollTop: $("#predictions").offset().top
     }, 400);
  })
}
