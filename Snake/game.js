let lastRenderTime = 0
const SNAKE_SPEED = 5
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
let food = { x: 0, y: 0 };

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
function update() {
    lastInputDirection = inputDirection;
    window.addEventListener("keydown", e => {
        switch (e.key) {
            case 'ArrowUp':
                if (lastInputDirection.y !== 0) break
                inputDirection = { x: 0, y: -1 };
                break
            case 'ArrowDown':
                if (lastInputDirection.y !== 0) break
                inputDirection = { x: 0, y: 1 };
                break
            case 'ArrowRight':
                if (lastInputDirection.x !== 0) break
                inputDirection = { x: 1, y: 0 };
                break
            case 'ArrowLeft':
                if (lastInputDirection.x !== 0) break
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

    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement);
}

