module.exports = function () {

  $('.requests-filter__item').on('click', function (e) {
    e.preventDefault();
    $('.requests-filter__item').removeClass('active');
    $(this).addClass('active');
  })

};