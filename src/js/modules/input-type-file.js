module.exports = function () {

  $('input[type="file"]').on('change', function () {
    const wrap = $(this).parent(' .download__input');
    const placeholder = $(wrap).find('  .download__input-filename');
    const fileName = $(wrap).find('.download__input-filename');
    const iconStart = $(wrap).find('.download__icon-start');
    const iconSuccess = $(wrap).find('.download__icon-success');

    if( this.value ){
      let fileNameVal = $(this).val().split('/').pop().split('\\').pop();

      $(placeholder).fadeOut(0);
      $(iconStart).fadeOut(0);

      $(iconSuccess).fadeIn();
      $(fileName).text(fileNameVal).fadeIn();
    }
  })

};