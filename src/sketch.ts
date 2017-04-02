var gameboard: GameBoard;
var player: Player;
var monsters: Monster[];
var action_seq: ActionSequence;

function setup(): void
{
    createCanvas(720, 400);  
    stroke(255);
    strokeWeight(5);
    frameRate(30);
    
    assets = new Assets();

    action_seq = new ActionSequence();
    
    gameboard = new GameBoard(7, 7);
    player = new Player(gameboard, new p5.Vector(3, 3));
    monsters = [
        new Queen(gameboard, new p5.Vector(2, 0)),
        new Knight(gameboard, new p5.Vector(6, 5))
    ];
}

function draw(): void
{
    action_seq.update();

    background(0);
    
    gameboard.draw();
}

function keyPressed(): void
{
    if (action_seq.isComplete())
    {
        var offset: p5.Vector = undefined;

        if (keyCode == LEFT_ARROW)
        {
            offset = new p5.Vector(-1, 0);
        }
        else if (keyCode == RIGHT_ARROW)
        {
            offset = new p5.Vector(1, 0);
        }
        else if (keyCode == UP_ARROW)
        {
            offset = new p5.Vector(0, -1);
        }
        else if (keyCode == DOWN_ARROW)
        {
            offset = new p5.Vector(0, 1);
        }

        if (offset)
        {
            var new_pos = player.pos().add(offset);

            if (gameboard.isValidPosition(new_pos))
            {
                player.moveToIfEmpty(new_pos, action_seq);

                var player_pos = player.pos();

                for (var i = 0; i < monsters.length; ++i)
                {
                    monsters[i].move(player_pos, action_seq);
                }
            }
        }
    }
}