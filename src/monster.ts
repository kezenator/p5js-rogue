class Monster extends Item
{
    private sprite: Sprite;
    private movingDown: boolean;

    constructor(gameboard: GameBoard, x: number, y: number)
    {
        super(gameboard, x, y);
        this.sprite = new Sprite(assets.monster, 4);
        this.movingDown = true;
    }

    draw(x: number, y: number, sizex: number, sizey: number): void
    {
        this.sprite.draw(x, y, sizex, sizey);
    };

    move(): void
    {
        var newy;
        
        if (this.movingDown)
        {
            newy = this.posY() + 1;
            if (newy >= (this.gameboard().rows() - 1))
                this.movingDown = false;
        }
        else
        {
            newy = this.posY() - 1;
            if (newy <= 0)
                this.movingDown = true;
        }
        
        this.moveToIfEmpty(this.posX(), newy);
    }
}