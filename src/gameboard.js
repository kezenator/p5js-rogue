function GameBoard(columns, rows)
{
    this.columns = columns;
    this.rows = rows;
    
    this.squares = new Array(columns);
    for (i = 0; i < columns; i++)
    {
        this.squares[i] = new Array(rows);
    }
}

GameBoard.prototype.draw = function()
{
    var startx = 10;
    var starty = 10;
    var endx = width - 10;
    var endy = height - 10;
    var sizex = (endx - startx) / this.columns;
    var sizey = (endy - starty) / this.rows;

    for (i = 0; i <= this.columns; ++i)
    {
        var x = startx + i * sizex;
        line(x, starty, x, endy);
    }

    for (i = 0; i <= this.rows; ++i)
    {
        var y = starty + i * sizey;
        line(startx, y, endx, y);
    }
    
    for (x = 0; x < this.columns; ++x)
    {
        for (y = 0; y < this.rows; ++y)
        {
            if (this.squares[x][y])
            {
                var posx = startx + x * sizex;
                var posy = starty + y * sizey;
                
                this.squares[x][y].draw(posx, posy, sizex, sizey);
            }
        }
    }
};

GameBoard.prototype.setItem = function(x, y, item)
{
    this.squares[x][y] = item;
}
