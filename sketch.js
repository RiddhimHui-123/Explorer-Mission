const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImage,Explorer;


function preload(){
backgroundImage=loadImage("sprites/jungle.png")


}
function setup(){
    var canvas = createCanvas(4000,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,7000,50)
  Explorer=new explorer(30,690,100,100)
   

}

function draw(){
    background(backgroundImage);

    Engine.update(engine);
  
    ground.display();
    Explorer.display();

  
//moveleft();
}

//function moveleft(){


  //if(keyDown("left")){

  //  Explorer.moveLeft();
  // }
//}