module.exports = function () {

  $('.menu-btn').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('open');
    $('#header').toggleClass('open');
    $('#main-wrap').toggleClass('no-scroll');
  })

  $(document).keyup((e) => {
    if (e.keyCode === 27) {
      closeMenu();
    }
  });

  function closeMenu(){
    $('.menu-btn').removeClass('open');
    $('#header').removeClass('open');
    $('#main-wrap').removeClass('no-scroll');
  }

};