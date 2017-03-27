var gameboard;
var player;

function setup()
{
    createCanvas(720, 400);  
    stroke(255);
    strokeWeight(5);
    frameRate(30);
    
    gameboard = new GameBoard(3, 2);
    player = new Player();
    gameboard.setItem(2, 1, player);
}

function draw()
{
    background(0);
    
    gameboard.draw();
}