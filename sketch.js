const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var MYengine,MYworld, box1,box2,ground,pig1,log1,box3,box4,pig2;


function setup(){

  createCanvas(1200,600);

  MYengine=Engine.create();
  MYworld=MYengine.world;

  ground = new Ground(600,590,1200,20);
  box1 = new Box(1000,550,80,80);
  box2 = new Box(800,550,80,80);
  box3 = new Box(1000,490,80,80);
  box4 = new Box(800,490,80,80);
  pig1= new Pigs(900,520);
  pig2= new Pigs(900,490);
 
  
  
  log1= new Logs(900,500,350,PI/2);

  
}

function draw(){

  background("pink");
  Engine.update(MYengine);


  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  box3.display();
  box4.display();
  pig2.display();
  
  log1.display();

}