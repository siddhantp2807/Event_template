let SlideIndex = 1;
ShowSlides(SlideIndex);

function PlusSlides(n) {
  ShowSlides(SlideIndex += n);
}


function CurrentSlide(n) {
  ShowSlides(SlideIndex = n);
}

function ShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Demo");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {SlideIndex = 1}
  if (n < 1) {SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[SlideIndex-1].style.display = "block";
  dots[SlideIndex-1].className += " active";
} 