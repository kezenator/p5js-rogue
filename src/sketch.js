var gameboard;
var player;
var assets;

function setup()
{
    createCanvas(720, 400);  
    stroke(255);
    strokeWeight(5);
    frameRate(30);
    
    assets = new Assets();
    
    gameboard = new GameBoard(5, 3);
    player = new Player(gameboard, 2, 1);
    monster = new Monster(gameboard, 2, 0);
}

function draw()
{
    background(0);
    
    gameboard.draw();
}

function keyPressed()
{
    if (keyCode == LEFT_ARROW)
    {
        if (player.x > 0)
        {
            player.moveToIfEmpty(player.x - 1, player.y);
        }
    }
    else if (keyCode == RIGHT_ARROW)
    {
        if (player.x < (gameboard.columns - 1))
        {
            player.moveToIfEmpty(player.x + 1, player.y);
        }
    }
    else if (keyCode == UP_ARROW)
    {
        if (player.y > 0)
        {
            player.moveToIfEmpty(player.x, player.y - 1);
        }
    }
    else if (keyCode == DOWN_ARROW)
    {
        if (player.y < (gameboard.rows - 1))
        {
            player.moveToIfEmpty(player.x, player.y + 1);
        }
    }
    
    monster.move();
}