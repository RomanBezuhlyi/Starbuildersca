document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header__burger");
  const closeButton = document.querySelector(".header__close");
  const mobileMenu = document.querySelector(".header-mobile");
  const body = document.querySelector("body");

  burgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("open");
    body.classList.add("no-scroll");
  });

  closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    body.classList.remove("no-scroll");
  });
});
