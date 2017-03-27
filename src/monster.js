function Monster(gameboard, x, y)
{
    Item.call(this, gameboard, x, y);
    this.sprite = new Sprite(assets.monster, 4);
    this.movingDown = true;
}

Monster.prototype = Object.create(Item.prototype);

Monster.prototype.draw = function(x, y, sizex, sizey)
{
    this.sprite.draw(x, y, sizex, sizey);
};

Monster.prototype.move = function()
{
    var newy;
    
    if (this.movingDown)
    {
        newy = this.y + 1;
        if (newy >= (this.gameboard.rows - 1))
            this.movingDown = false;
    }
    else
    {
        newy = this.y - 1;
        if (newy <= 0)
            this.movingDown = true;
    }
    
    this.moveToIfEmpty(this.x, newy);
};