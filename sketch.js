
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;


function preload()
{
	
}

function setup() {
	var canvas =  createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
  ground = new Ground(600,height,1200,20);
	//Create the Bodies Here.


  
    hammer = new Hammer(100,100);
    stone1 = new Stone(700,30,70,70);
    rubber = new Rubber(600,200,0);
    iron = new Iron(100,200,50,100);
    sand1 = new Sand(200,200,0);
    sand2 = new Sand(203,200,0);
    sand3= new Sand(206,200,0);
    sand4 = new Sand(209,200,0);
    sand5 = new Sand(212,200,0);
    sand6 = new Sand(215,200,0);

  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  stone1.display();
  hammer.display();
  ground.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

 
}



