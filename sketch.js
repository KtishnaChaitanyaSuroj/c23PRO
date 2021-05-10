var helicopterIMG, helicopterSprite, Box1,Box2,Box3, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
    
	Box1 = new Box(width/2-104 , height-90,10,100);
	Box2 = new Box(width/2, height-50, 200,20);
	Box3 = new Box(width/2+104, height-90, 10, 100);
	
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyWentDown("right")){
	  helicopterSprite.velocityX = helicopterSprite.velocityX + 3
} else{
	helicopterSprite.velocityX = 0;
}
  
  if(keyWentDown("left")){
	  helicopterSprite.velocityX = helicopterSprite.velocityX -  3
  }

  Box1.display();
  Box2.display(); 
  Box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);

    
  }
}



