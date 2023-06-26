// Initialize slide index and timer variables
var slideIndex = 1;
var timer;

// Call the showSlides function to start the slideshow
showSlides(slideIndex);

// Function to advance to the next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to switch to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the current slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // If the slide index is greater than the number of slides, reset to 1
  if (n > slides.length) {slideIndex = 1}

  // If the slide indexis less than 1, set it to the number of slides
  if (n < 1) {slideIndex = slides.length}

  // Hide all the slides and remove the "active" class from the dots
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the "active" class on the corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Set a timer to advance to the next slide after 5 seconds
  clearTimeout(timer);
  timer = setTimeout(function() {
      plusSlides(1);
  }, 5000);
}