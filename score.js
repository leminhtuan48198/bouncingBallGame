let num = 0
let demo

function display() {
    document.getElementById("score").innerHTML
        = "<b>" + (++num) + "</b>"
}

function start() {
    demo = setInterval(display, 200)
}

function stop() {
    clearInterval(demo)
}