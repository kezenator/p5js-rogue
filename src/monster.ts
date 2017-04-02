class Monster extends Item
{
    private _sprite: Sprite;
    private _direction: p5.Vector;
    private _moves: p5.Vector[];

    constructor(name: string, sprite: Sprite, gameboard: GameBoard, pos: p5.Vector, moves: p5.Vector[])
    {
        super(name, gameboard, pos);
        this._sprite = sprite;
        this._direction = new p5.Vector(0, 1);
        this._moves = moves;
    }

    draw(pos: p5.Vector, size: p5.Vector): void
    {
        this._sprite.draw(pos, size);
    };

    move(player_pos: p5.Vector, action_seq: ActionSequence): void
    {
        var gameboard = this.gameboard();

        // Calculate all possible moves
        // that the monster can make, and
        // shortest distance (to the player) found

        var all_moves: p5.Vector[] = [];
        var shortest_distance = Infinity;

        for (var i = 0; i < this._moves.length; ++i)
        {
            var dest = this.pos().add(this._moves[i]);

            if (gameboard.isValidPosition(dest)
                && gameboard.isEmpty(dest))
            {
                all_moves.push(dest);

                var dist = dest.dist(player_pos);
                if (dist < shortest_distance)
                    shortest_distance = dist;
            }
        }

        // Now, collect all of the shortest moves

        var shortest_moves: p5.Vector[] = [];

        for (i = 0; i < all_moves.length; ++i)
        {
            if (all_moves[i].dist(player_pos) == shortest_distance)
            {
                shortest_moves.push(all_moves[i]);
            }
        }

        // Now, randomly choose one of the moves
        // that gets us closest to the player

        if (shortest_moves.length > 0)
        {
            var random_index = Math.floor(Math.random() * shortest_moves.length)

            this.moveTo(shortest_moves[random_index], action_seq);
        }
    }
}