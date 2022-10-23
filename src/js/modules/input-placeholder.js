module.exports = function () {

  const targetInput = $('.input').find('input');
  $(targetInput).on('keyup', function () {
    const targetParent = $(this).parent('.input');

    if (this.value.length > 0) {
      $(targetParent).addClass('active');
    } else {
      $(targetParent).removeClass('active');
    }
  })

  const targetTextarea = $('.textarea').find('textarea');
  $(targetTextarea).on('keyup', function () {
    const targetParent = $(this).parent('.textarea');

    if (this.value.length > 0) {
      $(targetParent).addClass('active');
    } else {
      $(targetParent).removeClass('active');
    }
  })

  const targetSelect = $('.select').find('select');
  $(targetSelect).on('change', function () {
    const targetParent = $(this).parent('.select');
    let selNum = targetSelect.prop('selectedIndex');

    if (selNum > 0) {
      $(targetParent).addClass('active');
    } else {
      $(targetParent).removeClass('active');
    }
  });

};