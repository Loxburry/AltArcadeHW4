class Player {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        console.log(this);
    }

    update(dt, keys){
        if(keys.left.isDown){
            this.x -= 333*dt / 1000;
        }
        if(keys.right.isDown){
            this.x += 333*dt / 1000;
        }
        if(keys.up.isDown){
            this.y -= 333*dt / 1000;
        }
        if(keys.down.isDown){
            this.y += 333*dt / 1000;
        }
    }

    draw(graphics, col){
        graphics.save();
        graphics.translate(this.x, this.y);
        graphics.fillCircle(0,0, this.radius);
        if(col == false){
            graphics.fillStyle(0x0000ff, 1.0);
        }else{
            graphics.fillStyle(0xff0000, 1.0);
        }
        graphics.restore();
    }
}

module.exports = Player;