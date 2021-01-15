let lastRenderTime = 0
const SNAKE_SPEED = 2
const gameBoard = document.querySelector("#game-board");
function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return

    console.log("Render")
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    console.log("update")
}

const snakeBody = [{ x: 11, y: 11 }]
function draw() {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement);

    })
}