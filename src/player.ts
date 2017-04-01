class Player extends Item
{
    private sprite: Sprite;

    constructor(gameboard: GameBoard, x: number, y: number)
    {
        super(gameboard, x, y);
        this.sprite = new Sprite(assets.player, 4);
    }

    draw(x: number, y: number, sizex: number, sizey: number): void
    {
        this.sprite.draw(x, y, sizex, sizey);
    }
}