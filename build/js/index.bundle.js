!function(){var e={349:function(){faqList.addEventListener("click",(function(e){if("LI"===e.target.tagName){const t=e.target.classList.contains("active");document.querySelectorAll(".faq__list-item").forEach((function(e){e.classList.remove("active")})),e.target.classList.toggle("active",!t),e.target.querySelector("span").textContent=t?"+":"-"}}))},117:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".gallery__switch-variant"),t=document.querySelectorAll(".gallery__carousel");e.forEach(((n,r)=>{n.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),t.forEach((e=>e.classList.remove("is-active"))),this.classList.add("active"),t[r].classList.add("is-active")}))}))})),new Swiper(".gallery__slider",{navigation:{prevEl:".gallery__slider-prev",nextEl:".gallery__slider-next"},slidesPerView:1.5,initialSlide:2,spaceBetween:7,loop:!0,centeredSlides:!0,breakpoints:{768:{slidesPerView:2.5,spaceBetween:20}}})},642:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".header__close"),n=document.querySelector(".header-mobile"),r=document.querySelector("body");e.addEventListener("click",(function(){n.classList.add("open"),r.classList.add("no-scroll")})),t.addEventListener("click",(function(){n.classList.remove("open"),r.classList.remove("no-scroll")})),document.querySelectorAll(".header-mobile__nav a").forEach((e=>{e.addEventListener("click",(function(){n.classList.remove("open"),r.classList.remove("no-scroll")}))}))}))},290:function(){new Swiper(".reviews__slider",{navigation:{prevEl:".reviews__carousel-prev",nextEl:".reviews__carousel-next"},slidesPerView:1})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(642),n(117),n(290),n(349)}()}();