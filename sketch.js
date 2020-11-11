var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxl,boxb,boxr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	 
	 boxl=createSprite(290,height - 80,10,100);
	 boxl.shapeColor="red";
	 boxb=createSprite(395,height - 43,200,10);
	 boxb.shapeColor="red";
	 boxr=createSprite(500,height - 80,10,100);
	 boxr.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  //fill("red");
  //rect(boxl.x,boxl.y,10,100);
  //rect(boxb.x,boxb.y,200,20);
  //rect(boxr.x,boxr.y,10,100);

  
  Engine.update(engine);
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



