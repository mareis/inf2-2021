let lastRenderTime = 0
const SNAKE_SPEED = 2
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

function draw() {
    console.log("draw ")
}