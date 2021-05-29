
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2;

//BASE PYRAMID 1
var box1, box2, box3, box4, box5, box6, box7;
//1-FLOOR PYRAMID 1
var box8, box9, box10, box11, box12;
//2-FLOOR PYRAMID 1
var box13, box14, box15;
//TOP PYRAMID1
var box16;

//BASE PYRAMID2
var square1, square2, square3, square4, square5;
//1-FLOOR PYRAMID 2
var square6, square7, square8;
//TOP PYRAMID2
var square9;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(400,600,300,10);
  ground2 = new Ground(600,300,200,10);

  polygon = new Polygon(100,550,50,60)

  slingshot = new Slingshot(polygon.body,{x:100,y:500});

  box1 = new Box(280,570,30,50);
  box2 = new Box(320,570,30,50);
  box3 = new Box(360,570,30,50);
  box4 = new Box(400,570,30,50);
  box5 = new Box(440,570,30,50);
  box6 = new Box(480,570,30,50);
  box7 = new Box(520,570,30,50);
  box8 = new Box(299,520,30,50);
  box9 = new Box(339,520,30,50);
  box10 = new Box(380,520,30,50);
  box11 = new Box(420,520,30,50);
  box12 = new Box(460,520,30,50);
  box13 = new Box(400,469,30,50);
  box14 = new Box(360,469,30,50);
  box15 = new Box(320,469,30,50);
  box16 = new Box(340,419,30,50);

  square1 = new Box(525,274,30,40);
  square2 = new Box(560,274,30,40);
  square3 = new Box(595,274,30,40);
  square4 = new Box(630,274,30,40);
  square5 = new Box(666,274,30,40);
  square6 = new Box(648,234,30,40); 
  square7 = new Box(613,234,30,40);
  square8 = new Box(576,234,30,40);
  square9 = new Box(595,195,30,40);
  
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  ground1.display();
  ground2.display();
  polygon.display();
  slingshot.display();

//PYRAMID 1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
//PYRAMID 2
  square1.display();
  square2.display();
  square3.display();
  square4.display();
  square5.display();
  square6.display();
  square7.display();
  square8.display();
  square9.display();

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
    
}

function mouseReleased(){

    slingshot.fly()  

}


