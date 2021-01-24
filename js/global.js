let spinner = document.querySelector("#spinner");
let container = document.querySelector(".container");
document.querySelector("body").classList.add("bg-light");
container.style.display = "none";
window.setTimeout(() => {
  container.style.display = "block";
  spinner.style.display = "none";
}, 2100);
