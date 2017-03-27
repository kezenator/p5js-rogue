function Player()
{
}

Player.prototype = Object.create(Item.prototype);

Player.prototype.draw = function(x, y, sizex, sizey)
{
    line(x, y, x + sizex, y + sizey);
    line(x + sizex, y, x, y + sizey);
}