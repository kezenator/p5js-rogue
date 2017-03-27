function Item(gameboard, x, y)
{
    this.x = x;
    this.y = y;
    this.gameboard = gameboard;
    gameboard.setItem(x, y, this);
}

Item.prototype.draw = function(x, y, sizex, sizey)
{
};

Item.prototype.moveTo = function(x, y)
{
    gameboard.setItem(this.x, this.y, null);
    this.x = x;
    this.y = y;
    gameboard.setItem(x, y, this);
};

Item.prototype.moveToIfEmpty = function(x, y)
{
    if (gameboard.isEmpty(x, y))
    {
        this.moveTo(x, y);
    }
};
