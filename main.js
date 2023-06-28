var foguete,foguete_img
var terra,terra_img
var meteoro,meteoro_img
var chao
var space
var meteoroS
var lazer_img

function preload(){
  foguete_img = loadImage("assets/nave.png")
  terra_img = loadImage ("assets/terraaaa.png")
  meteoro_img = loadImage ("assets/meteoro.png")
  space = loadImage("assets/spacee.jpg")
  lazer_img = loadImage("assets/lazer.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
terra = createSprite(width/2,height+700)
terra.addImage(terra_img)
terra.scale = 1
terra.debug=false
terra.setCollider("circle",0,0,900)
foguete = createSprite(width-100,300)
foguete.addImage(foguete_img)
foguete.scale = 0.4
foguete.rotation=-90
meteoroS= new Group()

terra.rotationSpeed=1
//meteoro.rotationSpeed=0//
chao = createSprite(width/2,height,width,300)
chao.debug=true
chao.visible=false

}  

function draw(){
    background(space)
    drawSprites()
    foguete.y=mouseY
    meteoroo();
    if(mouseIsPressed===true){
    tiro()
    }
}

function meteoroo(){
  if(frameCount%60==0){
meteoro = createSprite(width/2,-50)
 meteoro.addImage(meteoro_img)
 meteoro.scale = 0.1
 
 meteoro.x=random(100,width-300)
meteoro.velocityY=5
meteoro.velocityX=random(-3,3)
meteoro.rotation=random(-45,45)
meteoro.lifetime=height/4
meteoroS.add(meteoro)

console.log(meteoro.lifetime)
  }
}

function tiro(){
  var lazer = createSprite(foguete.x,foguete.y)
  lazer.addImage(lazer_img)
  lazer.scale = 0.1
  lazer.velocityX = -13
 }
 