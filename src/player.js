function Player(gameboard, x, y)
{
    Item.call(this, gameboard, x, y);
}

Player.prototype = Object.create(Item.prototype);

Player.prototype.draw = function(x, y, sizex, sizey)
{
    image(assets.player, x, y, sizex, sizey);
}