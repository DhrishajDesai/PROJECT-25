
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper,rect1,rect2,rect3,paperImage,BinImage;
function preload()
{
	paperImage=loadImage("IMAGES/PAPER IMAGE")
	dustbinImage=loadImage("IMAGES/dustbingreen")
}

function setup() {
	createCanvas(800, 700);
	var ground=createSprite(700,700,1600,40);
	var rect1=createSprite(600,670,200,20);
	rect1.shapeColor="red";
	var rect2=createSprite(700,630,20,100);
	rect2.shapeColor="red";
	var rect3=createSprite(500,630,20,100);
	rect3.shapeColor="red";
	var paper=createSprite(200,670,20,20);
	paper.shapeColor="blue";
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(UP_ARROW)){
	  paper.velocityY=630;
  }
  drawSprites();
 
}



