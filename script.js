
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navMenu");
    const navOffset = nav.offsetTop; // Запоминаем изначальную позицию

    window.addEventListener("scroll", function () {
        if (window.scrollY > navOffset) {
            nav.classList.add("sticky"); // Добавляем класс при прокрутке
        } else {
            nav.classList.remove("sticky"); // Убираем, если вернулись наверх
        }
    });
});
