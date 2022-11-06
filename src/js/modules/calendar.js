module.exports = function () {

  const calendarInput =  $('.calendar-input input');

  $(calendarInput).daterangepicker({
    timePicker: true,
    autoUpdateInput: false,
    locale: {
      format: 'DD MMM',
      "separator": " - ",
      "daysOfWeek": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    }
  });

  $(calendarInput).on('apply.daterangepicker', function (ev, picker) {
    const targetParent = $(this).parent('.input');
    $(targetParent).addClass('active');

    $(this).val(picker.startDate.format('DD MMM') + ' - ' + picker.endDate.format('DD MMM'));
  });

};