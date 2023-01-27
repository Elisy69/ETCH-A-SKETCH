//проблема с передачей переменных

const container = document.querySelector(".container");
const createGridBtn = document.querySelector(".createGridBtn");
let tile;

function createNewGrid(input) {
  input = input ** 2;
  if (input <= 100000) {
    for (let i = 0; i < input; i++) {
      tile = document.createElement("div");
      tile.setAttribute("id", "tile");
      tile.classList.add("tile");
      console.log(input);
      container.style.cssText = `grid-template-columns: repeat(${Math.round(
        Math.sqrt(input)
      )}, 1fr); 
      grid-template-rows: repeat(${Math.round(Math.sqrt(input))}, 1fr)`;

      container.append(tile);
      tile.addEventListener("mouseover", function (e) {
        e.target.classList.add("active");
      });
    }
  } else alert("The number is too big!");
}

function draw(e) {
  e.target.classList.toggle("active");
}

createGridBtn.addEventListener("click", function (e) {
  let tiles = document.querySelectorAll("#tile");
  tiles.forEach((el) => el.remove());
  let output = prompt("Input grid size", "");
  createNewGrid(output);
});
