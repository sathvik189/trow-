const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(770,650,100,300);
	paperObject=new paper(30,250,20,50);
    groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);

  background("white");
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:18,y:-18});
    
  	}
}


