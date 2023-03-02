(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on(
		'click', function () {
      $('#sidebar').toggleClass('active');
  });
})(jQuery);

$(document).keypress(function(e){   
    if (e.keyCode == 32 ){
		$('#sidebar').toggleClass('active');
	}     
}); 

function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


let slidesIndex = 1;
showSlide(slidesIndex);


function plusSlide(n) {
  showSlide(slidesIndex += n);
}

// Thumbnail image controls
function currentSlidee(n) {
  showSlide(slidesIndex = n);
}
function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slidesIndex-1].style.display = "block";
  dots[slidesIndex-1].className += " active";
} 
