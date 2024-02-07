window.addEventListener("DOMContentLoaded", function () {
  var $min = document.querySelector(
      '.reservation_content [name="realDPX-min"]'
    ),
    $max = document.querySelector('.reservation_content [name="realDPX-max"]');

  $min.DatePickerX.init({
    mondayFirst: true,
    minDate: new Date(2021, 5, 9),
    maxDate: $max,
  });

  $max.DatePickerX.init({
    mondayFirst: true,
    minDate: $min,
    maxDate: function () {
      var date = new Date();
      return new Date().setDate(date.getDate() + 30);
    },
    clearButton: false,
  });
});
