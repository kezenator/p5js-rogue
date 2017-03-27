function Player(gameboard, x, y)
{
    Item.call(this, gameboard, x, y);
    this.sprite = new Sprite(assets.player, 4);
}

Player.prototype = Object.create(Item.prototype);

Player.prototype.draw = function(x, y, sizex, sizey)
{
    this.sprite.draw(x, y, sizex, sizey);
};