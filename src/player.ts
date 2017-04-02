class Player extends Item
{
    private _sprite: Sprite;

    constructor(gameboard: GameBoard, pos: p5.Vector)
    {
        super("player", gameboard, pos);
        this._sprite = assets.player;
    }

    draw(pos: p5.Vector, size: p5.Vector): void
    {
        this._sprite.draw(pos, size);
    }
}