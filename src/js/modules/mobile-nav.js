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

  // Get all navigation links
  const navLinks = document.querySelectorAll(".header__nav a");

  // Function to handle click event
  function handleNavLinkClick(event) {
    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    event.target.classList.add("active");
  }

  // Attach click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  // Mobile navigation links
  const mobileNavLinks = document.querySelectorAll(".header-mobile__nav a");

  // Attach click event listener to each mobile navigation link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });
});
