var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
overlay.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
