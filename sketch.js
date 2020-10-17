const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

var ground,world;







function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  
}