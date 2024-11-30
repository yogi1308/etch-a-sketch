const container = document.querySelector("#container")
const row = document.createElement("div")
const square = document.createElement("div")

for (let i = 0; i < 16; ++i) { // creates the square grid
    const row = document.createElement("div")
    row.classList.add("row")
    for (let j = 0; j < 16; ++j) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.addEventListener("mouseenter", handleMouseEnter)
        row.appendChild(square)
    }
    container.appendChild(row)
}

function handleMouseEnter(event) {
    event.target.setAttribute("style", "background: black")
}