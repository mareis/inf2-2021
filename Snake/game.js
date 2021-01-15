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

const snakeBody = [
    { x: 11, y: 11 }
]
let inputDirection = { x: 0, y: 0 };
function update() {
    window.addEventListener("keydown", e => {
        switch (e.key) {
            case 'ArrowUp':
                inputDirection = { x: 0, y: -1 };
                break
            case 'ArrowDown':
                inputDirection = { x: 0, y: 1 };
                break
            case 'ArrowRight':
                inputDirection = { x: 1, y: 0 };
                break
            case 'ArrowLeft':
                inputDirection = { x: -1, y: 0 };
                break
        }
    })

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

function draw() {
    gameBoard.innerHTML = "";
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement);

    })
}

