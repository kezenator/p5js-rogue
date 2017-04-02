class ActionSequence implements Action
{
    private sequence: Action[];

    constructor()
    {
        this.sequence = new Array();
    }

    add(action: Action): void
    {
        this.sequence.push(action);
    }

    update(): void
    {
        var repeat = true;

        while (repeat)
        {
            repeat = false;

            if (this.sequence.length > 0)
            {
                var first = this.sequence[0];

                first.update();

                if (first.isComplete())
                {
                    this.sequence.shift();
                    repeat = true;
                }
            }
        }
    }

    isComplete(): boolean
    {
        return this.sequence.length == 0;
    }
}