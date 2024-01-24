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

var swiper = new Swiper(".gallery__slider-1", {
  navigation: {
    prevEl: ".gallery__slider-prev-1",
    nextEl: ".gallery__slider-next-1",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".gallery__slider-2", {
  navigation: {
    prevEl: ".gallery__slider-prev-2",
    nextEl: ".gallery__slider-next-2",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".gallery__slider-3", {
  navigation: {
    prevEl: ".gallery__slider-prev-3",
    nextEl: ".gallery__slider-next-3",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".gallery__slider-4", {
  navigation: {
    prevEl: ".gallery__slider-prev-4",
    nextEl: ".gallery__slider-next-4",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".gallery__slider-5", {
  navigation: {
    prevEl: ".gallery__slider-prev-5",
    nextEl: ".gallery__slider-next-5",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".gallery__slider-6", {
  navigation: {
    prevEl: ".gallery__slider-prev-6",
    nextEl: ".gallery__slider-next-6",
  },
  slidesPerView: 1.5,
  initialSlide: 2,
  spaceBetween: 7,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});
