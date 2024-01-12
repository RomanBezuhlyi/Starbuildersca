document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо всі кнопки-перемикачі та всі блоки-каруселі
  const switchVariants = document.querySelectorAll(".gallery__switch-variant");
  const carousels = document.querySelectorAll(".gallery__carousel");

  // Додаємо обробник подій для кожної кнопки-перемикача
  switchVariants.forEach((variant, index) => {
    variant.addEventListener("click", function () {
      // Видаляємо клас "active" у всіх кнопок та блоків
      switchVariants.forEach((el) => el.classList.remove("active"));
      carousels.forEach((el) => el.classList.remove("is-active"));

      // Додаємо клас "active" поточній кнопці та відповідному блоку
      this.classList.add("active");
      carousels[index].classList.add("is-active");
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
