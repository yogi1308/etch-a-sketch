const container = document.querySelector("#container")
const row = document.createElement("div")
const square = document.createElement("div")
const button = document.querySelector("button")
button.addEventListener("click", handlebuttonClick)
createGrid()

function createGrid(numberOfSquares = 16) {
    for (let i = 0; i < numberOfSquares; ++i) { // creates the square grid
        const row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < numberOfSquares; ++j) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.addEventListener("mouseenter", handleMouseEnter)
            row.appendChild(square)
        }
        container.appendChild(row)
    }
}


function handleMouseEnter(event) {
    event.target.setAttribute("style", "background: black")
}

function handlebuttonClick(event) {
    numberOfSquares = prompt("Number of squares per side?")
    removeGrid()
    createGrid(numberOfSquares)
}

function removeGrid() {
    const container = document.querySelector("#container")
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}