let ball=new Circle(5)
let ctx = document.getElementById("canvas").getContext("2d")
let bar=new Rectangle(100,5)
let q1 = 250
let w1 = 300
let q2=250
let username
let count=0
let w2=500
let interval1;
let interval2;
let interval3;
let interval4;
let vx=Math.random()*7
let vy=Math.random()*7
function move1() {
    q1 -= 2.5+vx/2;
    w1-=2.5+vy/2
    if(count===20){stopAll(); username=prompt("Bạn thắng. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
        saveScore()
}}
    function move2() {
    q1 += 2.5+vx/2;
    w1-=2.5+vy/2
    if(count===20){stopAll();username=prompt("Bạn thắng. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
        saveScore()
    }
}
function move3() {
    q1 += 2.5+vx/2;
    w1+=2.5+vy/2
    if(count===20){stopAll();username=prompt("Bạn thắng. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
        saveScore()
    }
}
function move4() {
    q1 -= 2.5+vx/2;
    w1+=2.5+vy/2
    if(count===20){stopAll();username=prompt("Bạn thắng. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
        saveScore()
    }
}

function draw1() {
    ctx.clearRect(0, 0, 500, 560)
    move1()
    if (q1 <= 5) {
        stop1();
        run2();}
       else if (w1 <= 5) {
        stop1();
        run4();
    }
for(let e of brick){
    if (e.isCollision1(ball)){
        if(e.state){num+=100;count++; stop1();
           if(w1-ball.radius>e.y && w1+ball.radius<e.y+e.height){run2()}else run4();}
        e.setState();

    }
}
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
    for (let e of brick){
          if(e.state)  {e.drawBricks()}
    }
}
function draw2() {
    ctx.clearRect(0, 0, 500, 560)
    move2()
    if (w1 <= 5) {
        stop2();
        run3();
    }else
    if (q1 >= 495) {
        stop2();
        run1();
    }
    for(let e of brick){
        if (e.isCollision1(ball)){
            if(e.state){count++;num+=100; stop2();
                if(w1-ball.radius>e.y && w1+ball.radius<e.y+e.height){run1()}else run3();}
            e.setState();

        }
    }
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
    for (let e of brick){
        if(e.state)  {e.drawBricks()}
    }

}
function draw3() {
    ctx.clearRect(0, 0, 500, 560)
    move3()
    if (q1 >= 495) {
        stop3();
        run4();
    }else if (isCollision(ball,bar)) {
        stop3();
        run2();
        vx=Math.random()*7
    }
    for(let e of brick){
        if (e.isCollision1(ball)){
            if(e.state){ count++;num+=100; stop3();
                if(w1-ball.radius>e.y && w1+ball.radius<e.y+e.height){run4()}else  run2();}
            e.setState();

        }
    }
    //cham bien duoi
    if (w1 >= 555) {
        stopAll();
        username=prompt("Trò chơi kết thúc. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
        saveScore();
    }
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
    for (let e of brick){
        if(e.state)  {e.drawBricks()}
    }
}
function draw4() {
    ctx.clearRect(0, 0, 500, 560)
    move4()
    if (q1 <= 5) {
        stop4();
        run3();
    }else if (isCollision(ball,bar)) {
        stop4();
        run1();
        vx=Math.random()*7
    }

    for(let e of brick){
        if (e.isCollision1(ball)){
            if(e.state){count++;num+=100; stop4();
                if(w1-ball.radius>e.y && w1+ball.radius<e.y+e.height){run3()}else run1();}
            e.setState();

        }
    }
    // cham bien duoi
    if (w1 >= 555) {
        stopAll()
        username=prompt("Trò chơi kết thúc. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
        saveScore()
    }
    ball.drawCircle(q1, w1, "red")
    bar.drawRectangle(q2,w2,"blue")
    for (let e of brick){
        if(e.state)  {e.drawBricks()}
    }
}

function run1() {
    interval1 = setInterval(draw1, 25)
}
function run2() {
    interval2 = setInterval(draw2, 25)
}
function run3() {
    interval3 = setInterval(draw3, 25)
}
function run4() {
    interval4 = setInterval(draw4, 25)
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
function birckMoveDown(){
    for(let e of brick){
        e.moveDown()
        if(e.state){
            if(e.y+e.height>=500){
                stopAll();username=prompt("Bạn thua. Điểm của bạn là "+num.toFixed(0)+" Nhập tên của bạn")
                saveScore()
            }
        }
    }
}
let interval5
function run5(){
interval5 = setInterval(birckMoveDown, 10000)
}
function stop5(){
    clearInterval(interval5)
}
function stopAll(){
    stop1();stop2();stop3();stop4();stop5();stop()
}