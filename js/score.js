let num = 0
let chayDiem

function display() {
    num-=0.01
    document.getElementById("score").innerHTML
        = "<b>" + (num.toFixed(0)) + "</b>"
}

function start() {
    chayDiem = setInterval(display, 50)
}

function stop() {
    clearInterval(chayDiem)
}