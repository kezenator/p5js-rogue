class DelayAction implements Action
{
    private started: boolean;
    private timeout_ms: number;
    private progress: number;
    private start_ms: number;

    constructor(timeout_ms: number)
    {
        this.started = false;
        this.timeout_ms = timeout_ms;
        this.progress = 0;

        if (this.timeout_ms <= 0)
            this.timeout_ms = 1;
    }

    update(): void
    {
        if (!this.started)
        {
            this.started = true;
            this.start_ms = new Date().getTime();
        }

        if (this.started
            && (this.progress < 1))
        {
            var now_ms = new Date().getTime();
            var diff_ms = now_ms - this.start_ms;

            var fract = diff_ms / this.timeout_ms;

            if (fract < 0)
                fract = 0;
            else if (fract > 1)
                fract = 1;

            this.progress = fract;
        }
    }

    getProgress(): number
    {
        return this.progress;
    }

    isComplete(): boolean
    {
        return this.progress >= 1.0;
    }
};
