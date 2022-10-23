module.exports = function () {

  $('.restore__btn').on('mouseenter', function () {
    const activeVal = $(this).data('smile');

    $('.restore__smile').removeClass('active');
    $('#restore__smile-' + activeVal).addClass('active');
  })

  $('.restore__btn').on('mouseleave', function () {
    $('.restore__smile').removeClass('active');
    $('#restore__smile-base').addClass('active');
  })

};