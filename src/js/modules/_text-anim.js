module.exports = function () {

  let counter = 0;
  let element = $('#text-anim');

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

      if (scroll > offset && counter === 0) {
        $(element).addClass('active')
        counter = 1;
      }
    }
  }

};