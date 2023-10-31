// initialize variable
const navOpenBtn = document.querySelector(".nav_open_btn i");
const navCloseBtn = document.querySelector(".nav_close_btn");
const navBox = document.querySelector(".nav_items");

navOpenBtn.addEventListener("click", () => {
  navBox.style.right = "0";
});

navCloseBtn.addEventListener("click", () => {
  navBox.style.right = "-100%";
});
