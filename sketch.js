const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1;
 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600,70);
    ground = new Ground(400,680,800,30);
    dustbin1 = new Dustbin(610,660);

    Engine.run(engine);
  
}

function draw() {
  imageMode(CENTER);
  background(0);
  
  //Engine.update(engine);
  paper1.display();
  ground.display();
  dustbin1.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }

