let rowNumber = 16;
let colNumber = 16;
const gridContainer = document.querySelector("div.grid-container");

for (let i = 0; i < rowNumber; i++) {
  let rowContainer = document.createElement("div");
  rowContainer.setAttribute("class", "div-row");
  gridContainer.appendChild(rowContainer);
  for (let j = 0; j < colNumber; j++) {
    let squareSize = 50;
    let divGrid = document.createElement("div");
    divGrid.style.width = `${squareSize}px`;
    divGrid.style.height = `${squareSize}px`;
    divGrid.setAttribute("class", "div-grid");
    rowContainer.appendChild(divGrid);
  }
}

grids = document.querySelectorAll("div.div-grid");
grids.forEach((grid) => {
  grid.addEventListener("mouseover", (event) => {
    event.target.style.background = "blue";
  });
});

btnGridDimension = document.querySelector("button#grid-dimension");
btnGridDimension.addEventListener("click", () => {
  rowNumber = prompt("Type the number of row in the grid (max 100): ");
});
