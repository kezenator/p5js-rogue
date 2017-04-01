abstract class Item
{
    private x: number;
    private y: number;
    private m_gameboard: GameBoard;

    constructor(gameboard: GameBoard, x: number, y: number)
    {
        this.x = x;
        this.y = y;
        this.m_gameboard = gameboard;
        gameboard.setItem(x, y, this);
    }

    posX(): number { return this.x; }
    posY(): number { return this.y; }
    gameboard(): GameBoard { return this.m_gameboard; }

    abstract draw(x: number, y: number, sizex: number, sizey: number): void;

    moveTo(x: number, y: number): void
    {
        this.m_gameboard.setItem(this.x, this.y, null);
        this.x = x;
        this.y = y;
        this.m_gameboard.setItem(x, y, this);
    };

    moveToIfEmpty(x: number, y: number): void
    {
        if (this.m_gameboard.isEmpty(x, y))
        {
            this.moveTo(x, y);
        }
    };
}