const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var solo;
var pig, pig2;
var tronco, tronco2, tronco3, tronco4;
var bird;
var fundo;

function preload(){
    fundo = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(700,320, 70,70);
    box2=new Box(900,320,70,70);
    box3=new Box(700,200,70,70);
    box4=new Box(900,200,70,70);
    box5=new Box(800,100,70,70);
    solo=new Solo(600,height,1200,20);
    pig=new Pig(810,350)
    pig2=new Pig(810,200)
    tronco=new Tronco(810,260,300,PI/2);
    tronco2=new Tronco(810,100,300,PI/2);
    tronco3=new Tronco(870,50,150,-PI/7);
    tronco4=new Tronco(760,50,150,PI/7);
    bird=new Bird(200,100);
}

function draw(){
    background(fundo);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    solo.display();
    pig.display();
    pig2.display();
    tronco.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    bird.display();
}