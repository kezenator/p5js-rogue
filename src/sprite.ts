class Sprite
{
    private image: p5.Image;
    private numFrames: number;

    constructor(image: p5.Image, numFrames: number)
    {
        this.image = image;
        this.numFrames = numFrames;
    }

    draw(x: number, y: number, sizex: number, sizey: number): void
    {
        var frameHeight = this.image.height / this.numFrames;
        
        var frameIndex = Math.floor(frameCount / 6) % this.numFrames;
        
        var starty = frameIndex * frameHeight;
        
        image(this.image, x, y, sizex, sizey, 0, starty, this.image.width, frameHeight);
    }
}
