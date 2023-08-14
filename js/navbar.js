document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.animate-link');

  function animateLink(e) {
    e.preventDefault();
    var link = this;
  
    var overlay = document.createElement('div');
    overlay.className = 'page-overlay';
  
    document.body.appendChild(overlay);
  
    // Trigger the animation
    setTimeout(function() {
      overlay.classList.add('active');
      setTimeout(function() {
        window.location.href = link.href;
      }, 500); // Change to match the transition duration in CSS
    }, 10); // Allow some time for the overlay to be added to the DOM
  }

  // Attach click event listeners to all links with the "animate-link" class
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', animateLink);
  }
});


class Mynavbar extends HTMLElement {
    connectedCallback() {
      const currentLocation = window.location.href;
      this.innerHTML = `
        <style>
          .active {
            position: relative;
          }
  
          .active::before {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          .animate-link {


            text-decoration: none;
            color: black;
            z-index: 1;
          }
          
          .page-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            z-index: 999; 
            border-top: 2px solid black;
            border-radius: 50%/ 7% 7% 0 0;
            bottom: 0;
            transform: translateY(100%);
            transition: transform 0.5s ease-in-out;
          }
          
          .page-overlay.active {
            transform: translateY(0);
            border-radius: 0;
          }
        </style>


<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <a class="navbar-brand d-lg-none" href="/"><img src="" alt="">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span><i onclick="myFunction(this)" class="fa-light fa-bars"></i></span>
      </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
    <a class="navbar-brand d-none d-lg-block" href="/"><img src="" alt="">LOGO</a>
      <ul class="navbar-nav">
        <li class="nav-item ${currentLocation.includes('index.html') ? 'active' : ''}" >
        <a class="nav-link animate-link " href="index.html" aria-expanded="false">Home</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link animate-link" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Solutions
        </a>
        <div class="dropdown-menu" aria-labelledby="solutionsDropdown">
          <a class="dropdown-item animate-link ${currentLocation.includes('data_labeling.html') ? 'active' : ''}" href="data_labeling.html">Data Labeling</a>
          <a class="dropdown-item animate-link ${currentLocation.includes('data_sourcing.html') ? 'active' : ''}" href="data_sourcing.html">Data Sourcing</a>
          <a class="dropdown-item animate-link ${currentLocation.includes('content_moderation.html') ? 'active' : ''}" href="content_moderation.html">Content Moderation</a>
        </div>
      </li>

      <li class="nav-item dropdown">
      <a class="nav-link animate-link" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Company
      </a>
      <div class="dropdown-menu" aria-labelledby="solutionsDropdown">
        <a class="dropdown-item animate-link ${currentLocation.includes('careers.html') ? 'active' : ''}" href="careers.html">Careers</a>
        <a class="dropdown-item animate-link ${currentLocation.includes('data_sourcing.html') ? 'active' : ''}" href="security.html">Security</a>
      </div>
    </li>
      <li class="nav-item ${currentLocation.includes('about.html') ? 'active' : ''}">
      <a class="nav-link  animate-link" href="about.html">Blog</a>
      </li>
      </ul>
     
      <ul class="navbar-nav" style="width: 339px;display: flex;justify-content: flex-end;">  
      <li class="nav-item ${currentLocation.includes('contact_us.html') ? 'active' : ''}">
      <a class="nav-link animate-link" href="contact_us.html">Contact</a>
    </li>
      </ul>
     
    </div>
    
  </div>
</nav>`;

    }
  }
  
  customElements.define('my-navbar', Mynavbar);
  function myFunction(x) {
    x.classList.toggle("fa-x");
  }