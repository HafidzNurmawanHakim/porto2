window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var Toggle = document.querySelector(".toggle");
Toggle.addEventListener("click", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  menuToggle.classList.toggle("open");
});

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal2);
function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");
  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals2[i].getBoundingClientRect().top;
    revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals2[i].classList.add("active2");
    } else {
      reveals2[i].classList.remove("active2");
    }
  }
}
