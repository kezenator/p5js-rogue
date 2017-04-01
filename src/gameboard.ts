class GameBoard
{
    private m_columns: number;
    private m_rows: number;
    private m_squares: Item[][];

    constructor(columns: number, rows: number)
    {
        this.m_columns = columns;
        this.m_rows = rows;
        
        this.m_squares = new Array(columns);
        for (var i = 0; i < columns; i++)
        {
            this.m_squares[i] = new Array(rows);
        }
    }

    rows() : number { return this.m_rows; }
    columns() : number { return this.m_columns; }

    draw(): void
    {
        var startx = 10;
        var starty = 10;
        var endx = width - 10;
        var endy = height - 10;
        var sizex = (endx - startx) / this.m_columns;
        var sizey = (endy - starty) / this.m_rows;

        for (var i = 0; i <= this.m_columns; ++i)
        {
            var x = startx + i * sizex;
            line(x, starty, x, endy);
        }

        for (i = 0; i <= this.m_rows; ++i)
        {
            var y = starty + i * sizey;
            line(startx, y, endx, y);
        }
        
        for (x = 0; x < this.m_columns; ++x)
        {
            for (y = 0; y < this.m_rows; ++y)
            {
                if (this.m_squares[x][y])
                {
                    var posx = startx + x * sizex;
                    var posy = starty + y * sizey;
                    
                    this.m_squares[x][y].draw(posx, posy, sizex, sizey);
                }
            }
        }
    };

    setItem(x: number, y: number, item: Item): void
    {
        this.m_squares[x][y] = item;
    };

    isEmpty(x: number, y: number): boolean
    {
        return !this.m_squares[x][y];
    }
}
