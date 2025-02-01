const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove");
});

/**tambahkan berbagai elemen */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/**
 * NAVBAR TOOGLER UNTUK MOBILE 
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});



  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  window.addEventListener('scroll', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('visible');
      }
    });
  });




window.onload = function () {
  let cards = document.querySelectorAll(".service-card");
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = "auto";
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight; 
    }
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + "px"; 
  });
};
