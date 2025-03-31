let defaultNumber = 16;
let rowNumber = defaultNumber;
let colNumber = rowNumber;
let maxGridDimension = 800;
let typePaint = "";
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
}

function deleteGrid() {
  gridContainer.innerHTML = "";
}

function setSolidColor() {
  grids = document.querySelectorAll("div.div-grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.background = "black";
    });
  });
  typePaint = "solidColor";
}

function getRandomColorHex() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

function setRandomColor() {
  grids = document.querySelectorAll("div.div-grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.background = getRandomColorHex();
    });
  });
  typePaint = "randomColor";
}

const btnGridDimension = document.querySelector("button#grid-dimension");
const btnSolidColor = document.querySelector("button#solid-color");
const btnRandomColor = document.querySelector("button#random-color");
const btnGrayScale = document.querySelector("button#gray-scale");
const btnDefaultGrid = document.querySelector("button#default-grid");

function setGrayColor() {
  grids = document.querySelectorAll("div.div-grid");
  grids.forEach((grid) => {
    grid.style.opacity = 0;
    grid.style.background = "black";
    grid.addEventListener("mouseover", (event) => {
      event.target.style.opacity = Math.min(
        parseFloat(window.getComputedStyle(event.target).opacity) + 0.1,
        1
      );
      event.target.style.background = "black";
    });
  });
  typePaint = "grayColor";
}

function setTypePaint(typePaint) {
  if (typePaint == "solidColor") {
    return setSolidColor();
  } else if (typePaint == "grayColor") {
    return setGrayColor();
  } else {
    return setRandomColor();
  }
}

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
  setTypePaint(typePaint);
});

btnSolidColor.addEventListener("click", () => {
  deleteGrid();
  drawGrid(rowNumber, colNumber);
  setSolidColor();
});

btnRandomColor.addEventListener("click", () => {
  deleteGrid();
  drawGrid(rowNumber, colNumber);
  setRandomColor();
});

btnGrayScale.addEventListener("click", () => {
  setGrayColor();
});

btnDefaultGrid.addEventListener("click", () => {
  deleteGrid();
  drawGrid(defaultNumber, defaultNumber);
  setTypePaint(typePaint);
  rowNumber = defaultNumber;
  colNumber = rowNumber;
});

drawGrid(rowNumber, colNumber);
setSolidColor();
