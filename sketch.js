var canvas;
var block1,block2,block3,block4,genrealblock;
var ball, edges;


function preload(){
    // load sound here

}


function setup(){
    canvas = createCanvas(800,600);
 

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb (232,80,91) ;

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(181,211,53);
    
    block3 = createSprite(512,580,200,30);
    block3.shapeColor = rgb (195,161,204);  

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = rgb(2,158,177);

    genrealblock = createSprite(width/2,581,800,30);
    genrealblock.shapeColor = ("rgb(38,50,50)"); 
    genrealblock.depth = block1.depth - 5 ;

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = random(3,7) ;
    ball.velocityX = random(3,7) ;


}

function draw() {
    background(rgb(38,50,56));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(genrealblock);

    //console.log(width/2);


    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = rgb (232,80,91);
        ball.velocityY = ball.velocityY*-1;
     
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(181,211,53);
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityY = ball.velocityY*-1;
        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = rgb (195,161,204);
        ball.velocityY = ball.velocityY*-1;
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.shapeColor = rgb(2,158,177);
        ball.velocityY = ball.velocityY*-1;
    }

    drawSprites();
    textSize(60);
    fill(rgb (232,80,91));
    textStyle(BOLD);
    strokeWeight(10);
    stroke(rgb(38,50,50));
    textAlign(CENTER);
    text ("jumping box",width/2,height/2);
}
