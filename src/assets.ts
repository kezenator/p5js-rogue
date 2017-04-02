class Assets
{
    public player: Sprite;
    public monster: Sprite;
    public queen: Sprite;

    constructor()
    {
        this.player = new Sprite(loadImage("assets/player.png"), 4);
        this.monster = new Sprite(loadImage("assets/monster.png"), 4);
        this.queen = new Sprite(loadImage("assets/queen.png"), 1);
    }
}

var assets: Assets;
