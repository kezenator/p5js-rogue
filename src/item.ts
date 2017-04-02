abstract class Item
{
    private _name: string;
    private _pos: p5.Vector;
    private _gameboard: GameBoard;
    private _move_action: DelayAction;
    private _move_direction: p5.Vector;

    constructor(name: string, gameboard: GameBoard, pos: p5.Vector)
    {
        this._name = name;
        this._pos = pos;
        this._gameboard = gameboard;
        this._move_action = undefined;
        this._move_direction = undefined;
        gameboard.setItem(pos, this);
    }

    name(): string { return this._name; }
    pos(): p5.Vector { return this._pos.copy(); }
    gameboard(): GameBoard { return this._gameboard; }

    animationPos(): p5.Vector
    {
        var result: p5.Vector = this._pos.copy();

        if (this._move_action)
        {
            var orig_pos = result.copy().add(this._move_direction.copy().mult(-1));

            result = result.lerp(
                orig_pos,
                1 - this._move_action.getProgress());

            if (this._move_action.isComplete())
            {
                this._move_action = undefined;
                this._move_direction = undefined;
            }
        }
        
        return result;
    }

    abstract draw(pos: p5.Vector, size: p5.Vector): void;

    moveTo(pos: p5.Vector, action_seq: ActionSequence): void
    {
        this._move_direction = pos.copy().sub(this._pos);
        this._move_action = new DelayAction(250);
        action_seq.add(this._move_action);

        this._gameboard.setItem(this._pos, null);
        this._pos = pos;
        this._gameboard.setItem(pos, this);
    };

    moveToIfEmpty(pos: p5.Vector, action_seq: ActionSequence): void
    {
        if (this._gameboard.isEmpty(pos))
        {
            this.moveTo(pos, action_seq);
        }
    };
}