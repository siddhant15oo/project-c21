
var sun
var mercury
var venus
var earth
var mars
var jupiter
var saturn
var uranus
var neptune


function setup() {
  createCanvas(1200,800);
  sun= createSprite(0, 0, 200, 200);
  mercury= createSprite(150,100,20,20);
  venus= createSprite(250,200,40,40);
  earth= createSprite(350,300,40,40);
  mars= createSprite(450,400,35,35);
  jupiter= createSprite(550,500,60,60);
  saturn= createSprite(650,600,50,50);
  uranus= createSprite(750,600,45,45);
  neptune= createSprite(850,600,45,45);
}

function draw() {
  background(255,255,255);
  
  sun.width=mouseX +mouseY
  sun.height=mouseY+mouseX

  if (sun.x===1100 &&
      sun.y===800) {
        sun.visible=false
      }

      
  
  
      drawSprites();
}