module.exports = function () {

  //begin HOW IT WORKS
  $('.how-it-page-top__tab-btn').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');

    $('.how-it-page-top__tab-btn').removeClass('active');
    $('.how-it-page-tab').fadeOut(0);

    $(this).addClass('active');
    $('#how-it-page-tab--' + activeVal).fadeIn();

  })
  //end HOW IT WORKS

  //begin SIGN IN
  $('.sign-up__tabs-btn').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');
    const page = $('.sign-up');

    $('.sign-up__tabs-btn').removeClass('active');
    $(page).removeClass('sign-up--bo');
    $(page).removeClass('sign-up--co');

    $(this).addClass('active');
    $(page).addClass(activeVal);
  })
  //end SIGN IN

};