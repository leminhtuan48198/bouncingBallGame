class Bricks{
    width;
    height;
    x;
    y;
    state;

    constructor(width, height, x, y,state) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.state=state;
    }
    drawBricks() {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.fillStyle ="blue"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
     isCollision1(ball) {
        let Ax = q1;
        let Ay = w1;

        let rect_left = this.x;
        let rect_top = this.y;
        let rect_right = this.x + this.width;
        let rect_bottom = this.y + this.height;

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
    setState(){
        this.state=false;
    }
    moveDown(){
        this.y+=10
    }
}
let brick1=new Bricks(40,20,10,10,true)
let brick2=new Bricks(40,20,60,10,true)
let brick3=new Bricks(40,20,110,10,true)
let brick4=new Bricks(40,20,160,10,true)
let brick5=new Bricks(40,20,210,10,true)
let brick6=new Bricks(40,20,260,10,true)
let brick7=new Bricks(40,20,310,10,true)
let brick8=new Bricks(40,20,360,10,true)
let brick9=new Bricks(40,20,410,10,true)
let brick10=new Bricks(40,20,460,10,true)
let brick11=new Bricks(40,20,10,50,true)
let brick12=new Bricks(40,20,60,50,true)
let brick13=new Bricks(40,20,110,50,true)
let brick14=new Bricks(40,20,160,50,true)
let brick15=new Bricks(40,20,210,50,true)
let brick16=new Bricks(40,20,260,50,true)
let brick17=new Bricks(40,20,310,50,true)
let brick18=new Bricks(40,20,360,50,true)
let brick19=new Bricks(40,20,410,50,true)
let brick20=new Bricks(40,20,460,50,true)
let brick=[brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20]


