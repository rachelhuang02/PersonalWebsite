/* Your JS here. */
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("nav a");

//navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "60px";
    links.forEach((link) => {
      link.style.fontSize = "16px";
    });
  } else {
    navbar.style.height = "75px";
    links.forEach((link) => {
      link.style.fontSize = "18px";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function highlightNavLink() {
    const middleY = window.innerHeight / 2;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= middleY && rect.bottom >= middleY) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);
  highlightNavLink();
});

//modal
function createModal(modal, button, x) {
  var modal = document.getElementById(modal);
  var btn = document.getElementById(button);
  var span = document.getElementById(x);

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
}

createModal("uberModal", "uberBtn", "uberClose");
createModal("pfgModal", "pfgBtn", "pfgClose");
createModal("bpModal", "bpBtn", "bpClose");

//carousel
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);

const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  carouselItems[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
