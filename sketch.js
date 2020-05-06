const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(400,100,40);
    ballholder = new Ground(400,170,30,20)

    ground = new Ground(500,380,1000,20);
    box1 = new Box(680,350,40,40);
    box2 = new Box(740,350,40,40);
    box3 = new Box(800,350,40,40);
    box4 = new Box(860,350,40,40);
    box5 = new Box(920,350,40,40);
    box6 = new Box(710,310,40,40);
    box7 = new Box(770,310,40,40);
    box8 = new Box(830,310,40,40);
    box9 = new Box(890,310,40,40);
    box10 = new Box(740,270,40,40);
    box11 = new Box(800,270,40,40);
    box12 = new Box(860,270,40,40);
    box13 = new Box(770,230,40,40);
    box14 = new Box(830,230,40,40);
    box15 = new Box(800,190,40,40);
    
    ground1 = new Ground(800,160,340,20);
    box16 = new Box(650,130,40,40);
    box17 = new Box(710,130,40,40);
    box18 = new Box(770,130,40,40);
    box19 = new Box(830,130,40,40);
    box20 = new Box(890,130,40,40);
    box21 = new Box(950,130,40,40);
    box22 = new Box(680,90,40,40);
    box23 = new Box(740,90,40,40);
    box24 = new Box(860,90,40,40);
    box25 = new Box(920,90,40,40);
    box26 = new Box(710,50,40,40);
    box27 = new Box(890,50,40,40);

    chain = new Slingshot(ball.body,{x:400,y:100});
    
}

function draw(){
    background(255);
    Engine.update(engine);
    
    ball.display();
    ballholder.display();

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
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    
    ground1.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    chain.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}