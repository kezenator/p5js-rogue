class Sprite
{
    private image: p5.Image;
    private numFrames: number;

    constructor(image: p5.Image, numFrames: number)
    {
        this.image = image;
        this.numFrames = numFrames;
    }

    draw(pos: p5.Vector, size: p5.Vector): void
    {
        var frameHeight = this.image.height / this.numFrames;
        
        var frameIndex = Math.floor(frameCount / 6) % this.numFrames;
        
        var starty = frameIndex * frameHeight;
        
        image(this.image, pos.x, pos.y, size.x, size.y, 0, starty, this.image.width, frameHeight);
    }
}
