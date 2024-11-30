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
            square.setAttribute("style", `height: calc(500px/${numberOfSquares}); width: calc(500px/${numberOfSquares})`)
            square.addEventListener("mouseenter", (event) => handleMouseEnter(event, numberOfSquares))
            row.appendChild(square)
        }
        container.appendChild(row)
    }
}

function handleMouseEnter(event, numberOfSquares) {
    event.target.setAttribute("style", `background: black; height: calc(500px/${numberOfSquares}); width: calc(500px/${numberOfSquares})`)
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