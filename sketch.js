
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

var dustbinObj,paperObject,groundObject
var world


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

   var Render= Render.create({
   element: document.body,
   engine: engine,
   options:{
	   width: 1200,
	   height: 700,
	   wireframes: false
   }

   });


	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  dustbinObject.display();
  paperObject.display();
  groundObject.display();




  
  drawSprites();
 
}

function keyPressed(){
 
   if(keyCode===RIGHT_ARROW){
	   Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});



   }


}



