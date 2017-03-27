function Sprite(image, numFrames)
{
    this.image = image;
    this.numFrames = numFrames;
}

Sprite.prototype.draw = function(x, y, sizex, sizey)
{
    var frameHeight = this.image.height / this.numFrames;
    
    var frameIndex = Math.floor(frameCount / 6) % this.numFrames;
    
    var starty = frameIndex * frameHeight;
    
    image(this.image, x, y, sizex, sizey, 0, starty, this.image.width, frameHeight);
}