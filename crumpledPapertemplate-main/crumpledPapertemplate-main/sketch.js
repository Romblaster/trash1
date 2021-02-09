
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,dust,groundObject	
var paper1
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);

	dustbinObj=new dustbin(1200,650);

	paper1 = new paper(100,100,100,100)

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine)

  if(keyDown(LEFT_ARROW)){
	paper1.x = paper1.x - 3;
  }
  
 
 

  groundObject.display();
  paper1.display()
  dustbinObj.display();
  

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:520,y:-975});

		if(paper1.x<1200){ paper1.static=true; }


	}
  }




