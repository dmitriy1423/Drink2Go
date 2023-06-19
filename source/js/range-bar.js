function initRangeBar() {
  const range = document.querySelector('.form__range');
  const inputMin = document.querySelector('.form__input--min');
  const inputMax = document.querySelector('.form__input--max');

  if (!range || !inputMin || !inputMax) return

  const inputs = [inputMin, inputMax];

  noUiSlider.create(range, {
      start: [0, 900],
      connect: true,
      range: {
        'min': 0,
        'max': 1000
      },
      step: 1,
    }
  )

  range.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
  });
}

export default initRangeBar;
