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
    let opacity = Number.parseFloat(event.target.style.opacity) || 0
    console.log(opacity)
    if (opacity < 1){opacity = opacity + 0.1}
    else {opacity = 1}
    event.target.setAttribute("style", `background: rgb(${randomValue()}, ${randomValue()}, ${randomValue()}); opacity: ${opacity}; height: calc(500px/${numberOfSquares}); width: calc(500px/${numberOfSquares})`)
}

function handlebuttonClick(event) {
    numberOfSquares = prompt("Number of squares per side? (1-100)")
    isNumber = Number.parseInt(numberOfSquares)
    numberOfSquares = checkValidInput(numberOfSquares)
    removeGrid()
    createGrid(numberOfSquares)
}

function removeGrid() {
    const container = document.querySelector("#container")
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function checkValidInput(numberOfSquares) {
    isNumber = Number.parseInt(numberOfSquares)
    while (Number.isNaN(isNumber)) {
        numberOfSquares = prompt("It should be a number between 1-100")
        isNumber = Number.parseInt(numberOfSquares)
    }

    while (!(isNumber >= 1 && isNumber <= 100)) {
        numberOfSquares = prompt("It should be a number between 1-100")
        isNumber = Number.parseInt(numberOfSquares)
    }

    return isNumber
}

function randomValue() {
    return (Math.random()) * 255
}
