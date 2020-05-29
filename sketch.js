var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	roof1=new Roof(330,340);

	bob1 = new Bob(250,470,35, PI/2);
	bob2 = new Bob(290,470,35, PI/2);
	bob3 = new Bob(330,470,35, PI/2);
	bob4 = new Bob(370,470,35, PI/2);
	bob5 = new Bob(410,470,35, PI/2);

	rope1 = new Rope(bob1.body,roof1.body,20,10,0);
	rope2 = new Rope(bob2.body,roof1.body,30,10,0);
	rope3 = new Rope(bob3.body,roof1.body,40,10,0);
	rope4 = new Rope(bob4.body,roof1.body,50,10,0);
	rope5 = new Rope(bob5.body,roof1.body,60,10,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



