window.addEventListener('scroll', function() {
  var image = document.getElementById('shrink');
  var scrolled = window.scrollY;
  if (scrolled > 0) {
    image.style.maxWidth = (100 - scrolled / 10) + '%'; // Adjust the rate of shrinking
  } else {
    image.style.maxWidth = '100%';
  }
});


let slideIndex = 1;

    function openModal() {
        document.getElementById('modal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('mySlides');
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    }


function moveSlide(n) {
  const slides = document.getElementsByClassName("scroll-slide");
  const totalSlides = slides.length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  updateSlide();
}

function updateSlide() {
  const slides = document.getElementsByClassName("scroll-slide");
  const totalSlides = slides.length;
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}