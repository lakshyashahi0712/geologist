class Rubber {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.3,
            'friction':5.0,
            'density':1.0
            
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 100;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke("white");
        fill("orange");
        ellipse(0,0,this.radius);
        pop();
    }
};