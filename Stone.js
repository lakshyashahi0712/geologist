class Stone {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angles = this.body.angle;
        push();
        translate(pos.x, pos.y);
        text("Stone",Stone.x,Stone.y)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}