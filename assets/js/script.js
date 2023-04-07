let tokDiv = document.querySelectorAll(".tok-div");
let activeClass = document.querySelector(".active-tok");
let div2 = document.querySelector(".div-2");
let date = document.querySelector("#date");

tokDiv.forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    if (!ele.classList.contains("active-tok")) {
      if (activeClass) {
        activeClass.classList.remove("active-tok");
      }
      ele.classList.add("active-tok");
      activeClass = ele;
    }
  });
});

let check = new Date().getFullYear();
date.textContent = check;
