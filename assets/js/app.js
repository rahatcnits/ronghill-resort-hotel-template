// select box
const select = document.querySelector(".select_room");
const selectItem = document.querySelector(".room_select_text");
const optionsList = document.querySelector(".room_option_list");
const options = document.querySelectorAll(".room_option");

select.addEventListener("click", () => {
  optionsList.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

// select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    selectItem.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("active");
    optionsList.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});

// select box
const childSelect = document.querySelector(".select_child");
const childSelectItem = document.querySelector(".child_select_text");
const childOptionsList = document.querySelector(".child_options_list");
const childOptions = document.querySelectorAll(".child_option");

childSelect.addEventListener("click", () => {
  childOptionsList.classList.toggle("active");
  childSelect.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

// select option
childOptions.forEach((option) => {
  option.addEventListener("click", () => {
    childOptions.forEach((option) => {
      option.classList.remove("active");
    });
    childSelectItem.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("active");
    childOptionsList.classList.toggle("active");
    childSelect.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});
