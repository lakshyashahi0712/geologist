class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':0.6,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(4);
      stroke("black");
      fill("grey");
      rect(2, 2, this.width, this.height);
      pop();
    }
  };
  