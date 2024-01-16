// restaurant menu items tab
const menuTabs = document.querySelectorAll(".tab_btn");
const menuContents = document.querySelectorAll(".tab_content");

menuTabs.forEach((menuTab, index) => {
  menuTab.addEventListener("click", (e) => {
    menuTabs.forEach((menuTab) => {
      menuTab.classList.remove("active");
    });
    menuTab.classList.add("active");

    let tabLine = document.querySelector(".tab_line");
    tabLine.style.width = e.target.offsetWidth + "px";
    tabLine.style.left = e.target.offsetLeft + "px";

    menuContents.forEach((menuContent) => {
      menuContent.classList.remove("active");
    });
    menuContents[index].classList.add("active");
  });
});
