class GameBoard
{
    private _columns: number;
    private _rows: number;
    private _squares: Item[][];

    constructor(columns: number, rows: number)
    {
        this._columns = columns;
        this._rows = rows;
        
        this._squares = new Array(columns);
        for (var i = 0; i < columns; i++)
        {
            this._squares[i] = new Array(rows);
        }
    }

    rows() : number { return this._rows; }
    columns() : number { return this._columns; }

    isValidPosition(pos: p5.Vector): boolean
    {
        // x and y must be integers in range 0..columns-1,0..rows-1
        // z must be zero

        if (pos.z != 0)
            return false;
        
        if (pos.x != Math.floor(pos.x))
            return false;
        if (pos.y != Math.floor(pos.y))
            return false;

        if ((pos.x < 0) || (pos.x >= this._columns))
            return false;
        if ((pos.y < 0) || (pos.y >= this._rows))
            return false;

        return true;
    }

    draw(): void
    {
        var startx = 10;
        var starty = 10;
        var endx = width - 10;
        var endy = height - 10;
        var sizex = (endx - startx) / this._columns;
        var sizey = (endy - starty) / this._rows;
        var size = new p5.Vector(sizex, sizey);

        for (var i = 0; i <= this._columns; ++i)
        {
            var x = startx + i * sizex;
            line(x, starty, x, endy);
        }

        for (i = 0; i <= this._rows; ++i)
        {
            var y = starty + i * sizey;
            line(startx, y, endx, y);
        }
        
        for (x = 0; x < this._columns; ++x)
        {
            for (y = 0; y < this._rows; ++y)
            {
                var item = this._squares[x][y];

                if (item)
                {
                    var board_pos = item.animationPos();

                    var draw_pos = new p5.Vector(
                        startx + board_pos.x * sizex,
                        starty + board_pos.y * sizey
                    );
                    
                    this._squares[x][y].draw(draw_pos, size);
                }
            }
        }
    };

    setItem(pos: p5.Vector, item: Item): void
    {
        this._squares[pos.x][pos.y] = item;
    };

    isEmpty(pos: p5.Vector): boolean
    {
        return !this._squares[pos.x][pos.y];
    }
}
