// select box
const select = document.querySelector(".select");
const optionsList = document.querySelector(".options_list");
const options = document.querySelectorAll(".option");

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
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("active");
    optionsList.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});
