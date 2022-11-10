module.exports = function() {

  $('form').on('submit', function () {
    $(this).find('.btn').addClass('disabled');
  })

};