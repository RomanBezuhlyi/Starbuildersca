// Додайте обробник події до списку FAQ
faqList.addEventListener("click", function (event) {
  // Перевірте, чи клікнуто на елемент li
  if (event.target.tagName === "LI") {
    // Перевірте, чи клікнуто на активний елемент
    const isActive = event.target.classList.contains("active");

    // Зніміть клас активного елементу з усіх елементів FAQ
    const faqItems = document.querySelectorAll(".faq__list-item");
    faqItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Додайте клас активного елементу, який був натисканий
    event.target.classList.toggle("active", !isActive);

    // Змініть текст span на - або + в залежності від наявності класу "active"
    const spanElement = event.target.querySelector("span");
    spanElement.textContent = isActive ? "+" : "-";
  }
});
