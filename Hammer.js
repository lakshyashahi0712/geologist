class Hammer{
    constructor(x,y){
        var options = {
            'density':2.0,
            'friction':1.0,
            'restitution':0.5
        };
        this.body = Bodies.rectangle(x,y,80,20,options);
        this.width = 80;
        this.height = 20;
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angles= this.body.angles;

        push();
        translate(pos.x,pos.y);
        
        strokeWeight(3);
        stroke('brown')
        fill('yellow')
        
        rect(0,0,this.width,this.height);
        pop();
    }
}