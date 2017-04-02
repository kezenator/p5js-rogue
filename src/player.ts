class Player extends Item
{
    private sprite: Sprite;

    constructor(gameboard: GameBoard, pos: p5.Vector)
    {
        super("player", gameboard, pos);
        this.sprite = new Sprite(assets.player, 4);
    }

    draw(pos: p5.Vector, size: p5.Vector): void
    {
        this.sprite.draw(pos, size);
    }
}