
const carouselSlide = document.querySelector('.main__album-list-mob'),
      carouserItem = document.querySelectorAll('.main__album-item-mob');

const prevBtn = document.querySelector('#prevBtn'),
      nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouserItem[0].clientWidth;