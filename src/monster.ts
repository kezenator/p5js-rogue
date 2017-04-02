class Monster extends Item
{
    private sprite: Sprite;
    private direction: p5.Vector;

    constructor(gameboard: GameBoard, pos: p5.Vector)
    {
        super("monster", gameboard, pos);
        this.sprite = new Sprite(assets.monster, 4);
        this.direction = new p5.Vector(0, 1);
    }

    draw(pos: p5.Vector, size: p5.Vector): void
    {
        this.sprite.draw(pos, size);
    };

    move(action_seq: ActionSequence): void
    {
        for (var i = 0; i < 2; ++i)
        {
            var new_pos = this.pos().add(this.direction);

            if (!this.gameboard().isValidPosition(new_pos)
                || !this.gameboard().isEmpty(new_pos))
            {
                this.direction = this.direction.mult(-1);
            }
            else
            {
                this.moveToIfEmpty(new_pos, action_seq);
                break;
            }
        }
    }
}