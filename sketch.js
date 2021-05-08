const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber1 = new Rubber(600,450,60)
    rubber2 = new Rubber(600,350,10)
    rubber3 = new Rubber(600,340,10)
    rubber4 = new Rubber(600,330,10)
    rubber5 = new Rubber(600,450,10)
    rubber6 = new Rubber(600,350,10)
    rubber7 = new Rubber(600,340,10)
    rubber8 = new Rubber(600,330,10)
    rubber9 = new Rubber(600,450,10)
    rubber10 = new Rubber(600,350,10)
    rubber11 = new Rubber(600,340,10)
    rubber12 = new Rubber(600,330,10)
    stone1 = new Stone(700,320,100,100)
    iron1 = new Iron(300,320,30,80)
    iron2 = new Iron(300,320,30,80)
    iron3 = new Iron(300,320,30,80)
    iron4 = new Iron(300,320,30,80)
    iron5 = new Iron(300,320,30,80)
    iron6 = new Iron(300,320,30,80)
    iron7 = new Iron(300,320,30,80)
    iron8 = new Iron(300,320,30,80)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display(); 
    rubber9.display();
    rubber10.display();
    rubber11.display();
    rubber12.display();
    stone1.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    iron6.display();
    iron7.display();
    iron8.display();
 
}