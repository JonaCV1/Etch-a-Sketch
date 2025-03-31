let defaultNumber = 16;
let rowNumber = defaultNumber;
let colNumber = rowNumber;
let maxGridDimension = 800;
const gridContainer = document.querySelector("div.grid-container");

function drawGrid(rowNumber, colNumber) {
  for (let i = 0; i < rowNumber; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "div-row");
    gridContainer.appendChild(rowContainer);
    for (let j = 0; j < colNumber; j++) {
      let squareSize = maxGridDimension / rowNumber;
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
      event.target.style.background = "black";
    });
  });
}

function deleteGrid() {
  gridContainer.innerHTML = "";
}

drawGrid(rowNumber, colNumber);

const btnGridDimension = document.querySelector("button#grid-dimension");
const btnResetDraw = document.querySelector("button#reset-draw");
const btnDefaultGrid = document.querySelector("button#default-grid");

btnGridDimension.addEventListener("click", () => {
  rowNumber = prompt("Type the number of row in the grid (max 100): ");
  if (rowNumber <= 0) {
    rowNumber = 1;
  } else if (rowNumber >= 100) {
    rowNumber = 100;
  }
  colNumber = rowNumber;
  deleteGrid();
  drawGrid(rowNumber, colNumber);
});

btnResetDraw.addEventListener("click", () => {
  deleteGrid();
  drawGrid(rowNumber, colNumber);
});

btnDefaultGrid.addEventListener("click", () => {
  deleteGrid();
  drawGrid(defaultNumber, defaultNumber);
});
