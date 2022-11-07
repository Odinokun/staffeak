module.exports = function () {

  let counter = 0;
  let element = $('.index-text__title-link');

  $(window).on('scroll', function () {
    startTextAnim();
  });
  $(window).on('load', function () {
    startTextAnim();
  });

  function startTextAnim() {
    if ($(element).length > 0) {
      let scroll = $(window).scrollTop() + $(window).height();
      let offset = $(element).offset().top + $(element).height();

      if (scroll > offset + 200 && counter === 0) {
        $(element).addClass('active')
        counter = 1;
      }
    }
  }

};