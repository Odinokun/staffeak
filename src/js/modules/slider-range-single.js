module.exports = function () {

  // begin slider-range
  $(function () {
    let sliderRange = $('.slider-range-single-usd');

    for (let i = 0; i < sliderRange.length; i++) {
      let slider = $(sliderRange[i]).children('.slider-range-single__scale');
      let sliderInputFinish = $(sliderRange[i]).find('.slider-range-single__input--finish');
      let maxVal = $(sliderInputFinish).data('max');
      let finishVal = $(sliderInputFinish).data('finish');

      $(slider).slider({
        range: true,
        min: 0,
        max: maxVal,
        values: [0, finishVal],
        slide: function (event, ui) {
          //допкласс при минимальном значении
          if (ui.values[1] < 2) {
            $(slider).addClass('minval')
          } else {
            $(slider).removeClass('minval')
          }
          //допкласс при максимальном значении
          if (ui.values[1] === maxVal) {
            $(slider).addClass('maxval')
          } else {
            $(slider).removeClass('maxval')
          }

          //значение inputs при перемещении ползунков
          if (ui.values[1] < 10 && ui.values[1] !== 0) {
            ui.values[1] = '$0' + ui.values[1];
          } else {
            ui.values[1] = '$' + ui.values[1];
          }
          $(sliderInputFinish).val(ui.values[1]);
        }
      });

      //изменяем значение при загрузке
      if ($(slider).slider("values", 1) < 10 && $(slider).slider("values", 1) !== 0) {
        $(sliderInputFinish).val("$0" + $(slider).slider("values", 1));
      } else {
        $(sliderInputFinish).val("$" + $(slider).slider("values", 1));
      }

      //значение при загрузке (right input)
      if ($(slider).slider("values", 1) < 2) {
        $(slider).addClass('minval')
      } else {
        $(slider).removeClass('minval')
      }
      if ($(slider).slider("values", 1) === maxVal) {
        $(slider).addClass('maxval')
      } else {
        $(slider).removeClass('maxval')
      }

    }

  });

  // begin %%%%%%%%% slider-range
  $(function () {
    let sliderRange = $('.slider-range-single-percent');

    for (let i = 0; i < sliderRange.length; i++) {
      let slider = $(sliderRange[i]).children('.slider-range-single__scale');
      let sliderInputFinish = $(sliderRange[i]).find('.slider-range-single__input--finish');
      let maxVal = $(sliderInputFinish).data('max');
      let finishVal = $(sliderInputFinish).data('finish');

      $(slider).slider({
        range: true,
        min: 0,
        max: maxVal,
        values: [0, finishVal],
        slide: function (event, ui) {
          //допкласс при минимальном значении
          if (ui.values[1] < 2) {
            $(slider).addClass('minval')
          } else {
            $(slider).removeClass('minval')
          }
          //допкласс при максимальном значении
          if (ui.values[1] === maxVal) {
            $(slider).addClass('maxval')
          } else {
            $(slider).removeClass('maxval')
          }

          //значение inputs при перемещении ползунков
          if (ui.values[1] < 10 && ui.values[1] !== 0) {
            ui.values[1] = '0' + ui.values[1] + "%";
          } else {
            ui.values[1] = ui.values[1] + "%";
          }
          $(sliderInputFinish).val(ui.values[1]);
        }
      });

      //изменяем значение при загрузке
      if ($(slider).slider("values", 1) < 10 && $(slider).slider("values", 1) !== 0) {
        $(sliderInputFinish).val($(slider).slider("values", 1) + "%");
      } else {
        $(sliderInputFinish).val($(slider).slider("values", 1) + "%");
      }

      //значение при загрузке (right input)
      if ($(slider).slider("values", 1) < 2) {
        $(slider).addClass('minval')
      } else {
        $(slider).removeClass('minval')
      }
      if ($(slider).slider("values", 1) === maxVal) {
        $(slider).addClass('maxval')
      } else {
        $(slider).removeClass('maxval')
      }

    }

  });
};