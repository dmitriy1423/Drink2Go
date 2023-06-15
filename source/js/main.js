import './leaflet.js';
import './nouislider.js';

const mapOptions = {
  center: [59.968322, 30.317359],
  zoom: 18
}

const map = new L.map('map', mapOptions);

const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

const iconOptions = {
  iconUrl: './img/icons/stack.svg#map-icon',
  iconSize: [38, 50]
};

const customIcon = L.icon(iconOptions);

const markerOptions = {
  title: "MyLocation",
  clickable: true,
  draggable: false,
  icon: customIcon
};

const marker = new L.Marker([59.968322, 30.317359], markerOptions);

marker.addTo(map);



const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  const range = document.querySelector('.form__range'); // Ищем слайдер
  const inputMin = document.querySelector('.form__input--min'); // Ищем input с меньшим значнием
  const inputMax = document.querySelector('.form__input--max'); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, { // инициализируем слайдер
      start: [20, 80], // устанавливаем начальные значения
      connect: true, // указываем что нужно показывать выбранный диапазон
      range: { // устанавливаем минимальное и максимальное значения
        'min': 0,
        'max': 150
      },
      step: 1, // шаг изменения значений
    }
  )

  range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });

}

const init = () => {
  rangeSliderInit() // запускаем функцию инициализации слайдера
}

window.addEventListener('DOMContentLoaded', init)









const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});
