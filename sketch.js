const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint

var engine,world,canvas;
var b1,b2,b3,b4,b5
var sling,s2,s3,s4,s5;
var mConstraint

function setup(){
    canvas=createCanvas(windowWidth/2,windowHeight/1.5)
    engine=Engine.create()
    world=engine.world

    let canvasmouse=Mouse.create(canvas.elt)
   canvasmouse.pixelRatio=pixelDensity();
   let opt={
     mouse:canvasmouse
   };
   mConstraint=MouseConstraint.create(engine,opt)
   World.add(world,mConstraint)

  b1=new Pendulum(340,50,"blue")
  sling=new Sling(b1.body,{x:340,y:50})

  
  b2=new Pendulum(400,50,"blue")
  sling=new Sling(b1.body,{x:400,y:50})

  b3=new Pendulum(460,50,"blue")
  sling=new Sling(b1.body,{x:460,y:50})

  b4=new Pendulum(520,50,"blue")
  sling=new Sling(b1.body,{x:520,y:50})

  b5=new Pendulum(580,50,"blue")
sling=new Sling(b1.body,{x:580,y:50})

    //creating objects
}

function draw(){
  background(180)
  Engine.update(engine)

 
  b1.display()
  sling.display()

  b2.display()
  s2.display()

  b3.display()
  s3.display()

  b4.display()
  s4.display()

  b5.display()
  s5.display()

}

function mouseDragged(){
  Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})
}