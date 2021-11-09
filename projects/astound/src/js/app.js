
const carouselSlide = document.querySelector('.main__album-list-mob'),
      carouserItem = document.querySelectorAll('.main__album-item-mob');

const prevBtn = document.querySelector('#prevBtn'),
      nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouserItem[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0)
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

nextBtn.addEventListener('click', ()=> {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  if(carouserItem[counter].id === carouserItem.length){
    carouselSlide.style.transform = "none";
    // counter = carouserItem.length - 2;
    // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' 
  }
})

carouselSlide.addEventListener('transitionend', () =>{
  if(carouserItem[counter].id === carouserItem.length){
    carouselSlide.style.transition = "none";
    // counter = carouserItem.length - 2;
    // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' 
  }
})