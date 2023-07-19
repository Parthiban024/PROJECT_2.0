document.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.dot');
  const sections = document.querySelectorAll('section');
  const dotsContainer = document.querySelector('.dots-container');

  function setActiveDot(index) {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  const observerOptions = {
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        setActiveDot(index);

        // Add or remove the black class based on the section background color
        if (entry.target.classList.contains('section-black')) {
          dotsContainer.classList.add('black');
        } else {
          dotsContainer.classList.remove('black');
        }

        // Add or remove the section-white class for the third section
        if (index === 2) {
          entry.target.classList.add('section-white');
        } else {
          entry.target.classList.remove('section-white');
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Scroll to the top of the page
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      setActiveDot(0);
    }
  });

  

  function animateOnScroll() {
    const animationElementsLeftToRight = document.querySelectorAll('.animation-element-left-to-right');
    const animationElementsRightToLeft = document.querySelectorAll('.animation-element-right-to-left');
    const lineText = document.querySelector('.line-text2');
    const title = document.querySelector('.data-title2');
    const paragraph = document.querySelectorAll('.data-title2 + p');
    const button = document.querySelector('.button-con');

    animationElementsLeftToRight.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, index * 100); // Add a delay between each element animation
    });

    animationElementsRightToLeft.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, index * 100); // Add a delay between each element animation
    });

    lineText.classList.add('show');
    setTimeout(() => {
      title.classList.add('show');
    }, 100);

    paragraph.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, (index + 2) * 100); // Add a delay between each element animation after lineText and title
    });

    setTimeout(() => {
      button.classList.add('show');
    }, (paragraph.length + 2) * 1000); // Add a delay after all the paragraph elements

    window.removeEventListener('scroll', animateOnScroll);
  }

  function checkIfInView() {
    const section = document.getElementById('animated-border');
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
      animateOnScroll();
    }
  }

  window.addEventListener('scroll', checkIfInView);

  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    var header = document.querySelector('.header');
    var lineText = document.querySelector('.line-text');
    var dataTitle = document.querySelector('.data-title');
    var headerPosition = header.getBoundingClientRect().top;

    var screenHeight = window.innerHeight;

    if (headerPosition < screenHeight * 0.8) {
      lineText.classList.add('active');
      dataTitle.classList.add('active');
    } else {
      lineText.classList.remove('active');
      dataTitle.classList.remove('active');
    }
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }



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






// carosel
