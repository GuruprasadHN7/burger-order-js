const containerElement = document.getElementById("container-bug");
const spinachButton = document.getElementById("spinach");
const meatButton = document.getElementById("meat");
const baconButton = document.getElementById("bacon");
const price = document.getElementById("price");
let prices = [];
spinachButton.addEventListener("click", function (e) {
  const spinachElement = document.createElement("div");
  spinachElement.classList.add("spinach");
  containerElement.appendChild(spinachElement);
  prices.push(10);
  updatePrice();
});

meatButton.addEventListener("click", function (e) {
  const meatElement = document.createElement("div");
  meatElement.classList.add("meat");
  containerElement.appendChild(meatElement);
  prices.push(20);
  updatePrice();
});

baconButton.addEventListener("click", function (e) {
  const baconElement = document.createElement("div");
  baconElement.classList.add("bacon");
  containerElement.appendChild(baconElement);
  prices.push(15);
  updatePrice();
});

function updatePrice() {
  const total = prices.reduce((t, ac) => t + ac, 0);
  //console.log(total);
  price.innerHTML = total;
}
