class Sand{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.1,
            'friction':10,
            'density':2.0

        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        strokeWeight(1);
        stroke("golden");
        fill("golden");
        ellipse(0,0,this.radius);
        pop();
    }
}