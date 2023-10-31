const slider = document.querySelector(".slider");
const imgContainer = document.querySelector(".img_container");
const pagination = document.querySelectorAll(".pagination span");

function slide(id) {
  imgContainer.style.top = -100 * id + "%";

  pagination.forEach((pag) => {
    pag.classList.remove("active");
  });

  pagination[id].classList.add("active");
}

let interval = setInterval(autoSlide, 5000);

let imgId = 1;

function autoSlide() {
  if (imgId > pagination.length - 1) {
    imgId = 0;
  }
  slide(imgId);
  imgId++;
}

for (let i = 0; i < pagination.length; i++) {
  pagination[i].addEventListener("click", () => {
    clearInterval(interval);

    slide(i);

    imgId = i + 1;

    interval = setInterval(autoSlide, 5000);
  });
}
