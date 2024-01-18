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

  // Mobile navigation links
  const mobileNavLinks = document.querySelectorAll(".header-mobile__nav a");

  // Attach click event listener to each mobile navigation link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      body.classList.remove("no-scroll");
    });
  });
});
