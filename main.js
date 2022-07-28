let ball=new Circle(5)
let ctx = document.getElementById("canvas").getContext("2d")
let bar=new Rectangle(100,5)
let q1 = 250
let w1 = 300
let q2=250
let w2=500
let interval1;
let interval2;
let interval3;
let interval4;
let vx=Math.random()*7
let vy=Math.random()*7
function move1() {
    q1 -= 5+vx;
    w1-=5+vy
}function move2() {
    q1 += 5+vx;
    w1-=5+vy
}function move3() {
    q1 += 5+vx;
    w1+=5+vy
}function move4() {
    q1 -= 5+vx;
    w1+=5+vy
}

function draw1() {
    ctx.clearRect(0, 0, 500, 560)
    move1()
    if (q1 <= 5) {
        stop1();
        run2();}
        if (w1 <= 5) {
        stop1();
        run4();
    }

    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
}
function draw2() {
    ctx.clearRect(0, 0, 500, 560)
    move2()
    if (w1 <= 5) {
        stop2();
        run3();
    }
    if (q1 >= 495) {
        stop2();
        run1();
    }
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
}
function draw3() {
    ctx.clearRect(0, 0, 500, 560)
    move3()
    if (q1 >= 495) {
        stop3();
        run4();
    }
    if (isCollision(ball,bar)) {
        stop3();
        run2();
        vx=Math.random()*7


    }
    //cham bien duoi
    if (w1 >= 555) {
        stop3();
        stop();
        alert("Trò chơi kết thúc. Điểm của bạn là "+num)
    }
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
}
function draw4() {
    ctx.clearRect(0, 0, 500, 560)
    move4()
    if (q1 <= 5) {
        stop4();
        run3();
    }
    if (isCollision(ball,bar)) {
        stop4();
        run1();
        vx=Math.random()*7
    }
    // cham bien duoi
    if (w1 >= 555) {
        stop4();
        stop()
        alert("Trò chơi kết thúc. Điểm của bạn là "+num);
    }
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
}

function run1() {
    interval1 = setInterval(draw1, 50)
}
function run2() {
    interval2 = setInterval(draw2, 50)
}
function run3() {
    interval3 = setInterval(draw3, 50)
}
function run4() {
    interval4 = setInterval(draw4, 50)
}

function stop1() {
    clearInterval(interval1)
}
function stop2() {
    clearInterval(interval2)
}
function stop3() {
    clearInterval(interval3)
}
function stop4() {
    clearInterval(interval4)
}
function leftArrowPressed() {
    if(q2>0){
    q2-=5;}
}
function rightArrowPressed() {
    if(q2<400){
    q2+=5}
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
function isCollision(ball, bar) {
    let Ax = q1;
    let Ay = w1;

    let rect_left = q2;
    let rect_top = w2;
    let rect_right = q2 + bar.width;
    let rect_bottom = w2 + bar.height;

    if (q1 < rect_left)
        Ax = rect_left;
    else if (q1 > rect_right)
        Ax = rect_right;

    if (w1 < rect_top)
        Ay = rect_top;
    else if (w1 > rect_bottom)
        Ay = rect_bottom;

    let dx = q1 - Ax;
    let dy = w1 - Ay;

    return (dx * dx + dy * dy) <= ball.radius * ball.radius;
}