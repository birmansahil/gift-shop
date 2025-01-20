const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
    menu.classList.toggle('menu-active');
    navList.classList.toggle("nav-list-active");
});
