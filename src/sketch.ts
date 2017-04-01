var gameboard: GameBoard;
var player: Player;
var monster: Monster;

function setup(): void
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

function draw(): void
{
    background(0);
    
    gameboard.draw();
}

function keyPressed(): void
{
    if (keyCode == LEFT_ARROW)
    {
        if (player.posX() > 0)
        {
            player.moveToIfEmpty(player.posX() - 1, player.posY());
        }
    }
    else if (keyCode == RIGHT_ARROW)
    {
        if (player.posX() < (gameboard.columns() - 1))
        {
            player.moveToIfEmpty(player.posX() + 1, player.posY());
        }
    }
    else if (keyCode == UP_ARROW)
    {
        if (player.posY() > 0)
        {
            player.moveToIfEmpty(player.posX(), player.posY() - 1);
        }
    }
    else if (keyCode == DOWN_ARROW)
    {
        if (player.posY() < (gameboard.rows() - 1))
        {
            player.moveToIfEmpty(player.posX(), player.posY() + 1);
        }
    }
    
    monster.move();
}