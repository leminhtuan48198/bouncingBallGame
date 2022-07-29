class Circle {
    radius

    constructor(radius) {
        this.radius = radius
    }

    drawCircle(x, y, color) {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(x, y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}