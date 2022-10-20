module.exports = function () {

  $('.menu-btn').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('open');
    $('#header').toggleClass('open');
  })

};