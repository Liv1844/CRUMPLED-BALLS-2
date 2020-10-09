var paperObjectIMG, BinIMG;
var paperObject,ground;
var boxS1,boxS2;
var boxS3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	paperIMG=loadImage("Crumpled Paper.png");
	BinIMG=loadImage("Dustbin Green.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

	boxS1=createSprite(width*.75 , height-45.5, 200,10);
	boxS1.shapeColor=color(255,255,255);
	boxS2=createSprite(width*.634, height-80, 15,75);
	boxS2.shapeColor=color(255,255,255);
	boxS3=createSprite(width*.865, height-80, 15,75);
	boxS3.shapeColor=color(255,255,255);
	boxS1.addImage(BinIMG);
	boxS2.addImage(BinIMG);
	boxS3.addImage(BinIMG);

	paperObject=createSprite(width/5, height-100, 40,40);
	paperObject.addImage(PaperIMG);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperObject = Bodies.circle(width/5 , height-100 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, paperObject);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,255,0)
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paperObject.x=paperObject.position.x
 paperObject.y=paperObject.position.y

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
   }
   }
