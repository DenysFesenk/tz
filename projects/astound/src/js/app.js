let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Next/previous controls
// const next = document.getElementsByClassName("next");
// // next.onclick = function plusSlides(n) {
// //   showSlides(slideIndex += n);
// //   console.log('say hi')
// // }
// next.addEventListener('click', () => {
//   console.log('say hi')
// })

document.getElementsByClassName("next").onclick = plusSlides;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main__album-item-mob");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}