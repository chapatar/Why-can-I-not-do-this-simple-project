
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,200,70);
	ground=new Ground(700,500);
	side1=new Dustbin(730,390,20,200);

	side2=new Dustbin(800,480,200,20);
	
	side3=new Dustbin(870,390,20,200);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  

  paper.display();
  ground.display();
  side1.display();
  side3.display();
  side2.addImage();
  
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:120,y:-120});
	}
}

