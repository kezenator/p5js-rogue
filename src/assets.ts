class Assets
{
    public player: p5.Image;
    public monster: p5.Image;

    constructor()
    {
        this.player = loadImage("assets/player.png");
        this.monster = loadImage("assets/monster.png");
    }
}

var assets: Assets;
