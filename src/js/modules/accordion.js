module.exports = function () {

  $('.how-it-page-tab__header').on('click', function () {
    const activeBody = $(this).next('.how-it-page-tab__body');

    if ($(this).hasClass('active')) {
      $('.how-it-page-tab__header').removeClass('active');
      $('.how-it-page-tab__body').slideUp();
    } else {
      $('.how-it-page-tab__header').removeClass('active');
      $('.how-it-page-tab__body').slideUp();

      $(this).addClass('active');
      $(activeBody).slideDown();
    }
  })

};