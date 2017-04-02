class Knight extends Monster
{
    constructor(gameboard: GameBoard, pos: p5.Vector)
    {
        super(
            "knight",
            assets.monster,
            gameboard,
            pos,
            [
                new p5.Vector(-2, -1),
                new p5.Vector(-2, 1),
                new p5.Vector(2, -1),
                new p5.Vector(2, 1),
                new p5.Vector(-1, -2),
                new p5.Vector(-1, 2),
                new p5.Vector(1, -2),
                new p5.Vector(1, 2),
            ]);
    }
}