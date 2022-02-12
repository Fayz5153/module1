let offset = 0;
const sliderLine = document.querySelector('.slider__wrapper');
const sliderItems = document.querySelectorAll('.slider__item');
let itemLength = sliderItems.length - 1
let itemWidth = sliderItems[0].offsetWidth + 20

document.querySelector('.button__next').addEventListener('click', () => {
  offset = offset + itemWidth;
  if (offset > (itemWidth * itemLength) ) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button__prev').addEventListener('click', () => {
  offset = offset - itemWidth;
  if (offset < 0) {
    offset = (itemWidth * itemLength);
  }
  sliderLine.style.left = -offset + 'px';
});