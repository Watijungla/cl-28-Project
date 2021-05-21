
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
  boy=loadImage("image/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  stoneObj=new stoneObj(235,420,30);
  
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

  attach=new Throw(stones.body,{x:100,y:465});

  tree = createSprite(775,368);
  tree.addImage(treeimg);
  tree.scale=0.42;

  boy=createSprite(160,550);
  boy.addImage(boyimg);
  boy.scale=0.125;

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);

  finallyll("black");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stones.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
 
  stoneObj.display();
  groundObject.display();
  
  drawSprites();

  detectollision(stones,mango1);
  detectollision(stones,mango2);
  detectollision(stones,mango3);
  detectollision(stones,mango4);
  detectollision(stones,mango5);
  detectollision(stones,mango6);
  detectollision(stones,mango7);
  detectollision(stones,mango8);
  detectollision(stones,mango9);
  detectollision(stones,mango10);
  detectollision(stones,mango11);
  detectollision(stones,mango12);
}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
}


//create mouseReleased function here
function mouseReleased(){
  attach.fly();
}

function detectCollision(lstones,lmango){

  if(lstones.body.position.x- lmango.body.x <lmango.diametre + lstones.diametre
      && lmango.body.position.x - lstones.diametre + lstones.diametre
      &&lstones.body.position.y -lmango.body.position.x < lmango.diametre + lstones.diametre
      && lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){

      }
}

//create keyPressed function here
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stones.body,{x:100,y:465});
    attach.Launch(stoneObj.body);
    
  }
}

  