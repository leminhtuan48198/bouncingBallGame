class Rectangle {
    width
    height

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    drawRectangle(x, y, color) {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.fillStyle = color
        ctx.fillRect(x, y, this.width, this.height)
    }
}