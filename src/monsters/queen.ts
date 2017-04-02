class Queen extends Monster
{
    constructor(gameboard: GameBoard, pos: p5.Vector)
    {
        super(
            "queen",
            gameboard,
            pos,
            [
                new p5.Vector(-1, -1),
                new p5.Vector(-1, 0),
                new p5.Vector(-1, 1),
                new p5.Vector(0, -1),
                new p5.Vector(0, 1),
                new p5.Vector(1, -1),
                new p5.Vector(1, 0),
                new p5.Vector(1, 1),
            ]);
    }
}