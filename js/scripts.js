document.addEventListener('DOMContentLoaded', function() {

  function pagination() {
    var offset = $(document).scrollTop();
    var windowHeight = $(window).height();
    var $body = $('body');
    var padding = .75;
    var pages = Object.keys($('.page')).filter((section) => Number(section) + 1).map(section => Number(section) + 1)
  
    pages.map((page) => {
      if (offset > (windowHeight * (page - 2 + padding))) {
         $body.removeClass().addClass("page-" + page);
      }
    });
  };
  
  pagination();
  
  $(document).on('scroll', pagination);
  
  $(document).on('click', 'a[href^="#"]', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });
  
  $(document).ready(function() {
    // When a pagination link is clicked
    $("#pagination li a").click(function() {
      // Remove the 'active' class from all links
      $("#pagination li a").removeClass("active");
      
      // Add the 'active' class to the clicked link
      $(this).addClass("active");
    });
  });


  // letter animation
  function handleScrollTwo() {
    const textElement = document.querySelector('.text_cen');
    

    if (isElementInViewport(textElement)) {
      textElement.classList.add('text-show');
      const text = textElement.textContent.trim();
      const letters = text.split('');

      textElement.textContent = '';

      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        textElement.appendChild(span);
      });

      window.removeEventListener('scroll', handleScrollTwo);
    }
  }

  window.addEventListener('scroll', handleScrollTwo);

 const slides = document.querySelectorAll('.slide');

  function handleSlideAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-show');
        observer.unobserve(entry.target); // Stop observing the slide once animated
      }
    });
  }

  const slideObserver = new IntersectionObserver((entries, observer) => {
    handleSlideAnimation(entries, observer);
  }, {
    rootMargin: '0px',
    threshold: 0.5
  });

  slides.forEach(slide => {
    slideObserver.observe(slide);
  });


  
});


