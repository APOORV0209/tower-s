const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var box1;
var score=0;
function preload(){
bg=loadImage("bg.png")






}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,70,70);
    box2 = new Box(830,550,70,70);
    ground = new Ground(500,height,1000,20)
    box3 = new Box(860,550,70,70);
    box4 = new Box(890,550,70,70);
    box5 = new Box(840,500,70,70);
    box6 = new Box(870,500,50,70);
    box7 = new Box(900,500,70,70);
    box8 = new Box(860,450,70,70);
    box9 = new Box(890,450,70,70);
    box10 = new Box(850,400,70,70);
    bird=new Bird( 200,500,50,50)
    slingshot=new SlingShot(bird.body,{x:200,y:500})
}

function draw(){
    background(bg);
    Engine.update(engine);
    textSize(25)
    fill (0)
    text("score "+score,800,50)
    ground.display();
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
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();

    bird.display();
    slingshot.display();
    

   
}
  function mouseDragged() {
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }


function mouseReleased(){
slingshot.fly()

}