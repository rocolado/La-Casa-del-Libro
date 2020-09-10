var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i, slides;
  slides = document.getElementsByClassName("slides");
  slideIndex = n;
  
  if (n >= slides.length) {
    slideIndex = 0
  }   

  for (i = 0; i < slides.length; i++) {
    if (i != slideIndex) {
      slides[i].style.display = "none";
    } else {
      slides[i].style.display = "inline-block";  
    }
  }
}