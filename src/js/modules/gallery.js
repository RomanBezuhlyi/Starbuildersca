document.addEventListener("DOMContentLoaded", function () {
  const switchVariants = document.querySelectorAll(".gallery__switch-variant");

  switchVariants.forEach(function (button) {
    button.addEventListener("click", function () {
      // Знімаємо клас 'active' з усіх кнопок
      switchVariants.forEach(function (otherButton) {
        otherButton.classList.remove("active");
      });

      // Додаємо клас 'active' до натисканої кнопки
      button.classList.add("active");
    });
  });
});

var swiper = new Swiper(".gallery__slider", {
  navigation: {
    prevEl: ".gallery__slider-prev",
    nextEl: ".gallery__slider-next",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});
