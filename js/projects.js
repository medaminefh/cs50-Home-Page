let i = 1;
let times = 5;
let cardContainer = document.querySelector(".cardsContainer");
let colors = [
  "white",
  "dark",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
];
let bg = [
  "dark",
  "white",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
];
let card = (
  a,
  b,
  c
) => `<div class="card text-${a} bg-${b} m-3" style="max-width: 18rem;">
<div class="card-header">Header ${c}</div>
<div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
</div>
</div>`;
bg.forEach((c) => {
  cardContainer.innerHTML += card(colors[0], c, i);
  i++;
});
