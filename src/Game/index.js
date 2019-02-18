//import outside libraries
const Phaser = require('phaser');
const Player = require('./Player');

const phaserConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
};

let graphics;
let keys;
let col = true;

const p1 = new Player(phaserConfig.width/2, phaserConfig.height/2, 10);

const circle2 = {
    x: phaserConfig.width / 4,
    y: phaserConfig.height / 4,
    radius: 20
};

function create(){
    graphics = this.add.graphics({
        //fillStyle: {color: 0xff0000},
        lineStyle: {width: 3, color: 0xff0000}
    });
    keys = this.input.keyboard.createCursorKeys();
    
}

function update(totalTime, deltaTime){
    
    p1.update(deltaTime, keys);

    //moves player to other side of screen if going off screen
    if(p1.x > phaserConfig.width + (p1.radius / 2)){
        p1.x = 0 + (p1.radius / 2);
    }
    if(p1.x < (p1.radius / 2)){
        p1.x = phaserConfig.width - (p1.radius / 2);
    }
    if(p1.y > phaserConfig.height + (p1.radius / 2)){
        p1.y = 0 + (p1.radius / 2);
    }
    if(p1.y < (p1.radius / 2)){
        p1.y = phaserConfig.height - (p1.radius / 2);
    }

    graphics.clear();

    const distSq = (p1.x - circle2.x)*(p1.x - circle2.x)+(p1.y - circle2.y)*(p1.y - circle2.y);
    const radiiSq = (p1.radius * p1.radius)+(circle2.radius * circle2.radius);
    graphics.save();

    // if(distSq < radiiSq){
    //     console.log('hello');
    //     graphics.fillStyle(0x0000ff, 1.0);
    // }

    if(distSq < radiiSq){
        col = false;
        //console.log(col);
    }else{
        //console.log(col);
        col = true;
    }

    graphics.fillCircle(circle2.x, circle2.y, 20);
    
    p1.draw(graphics, col);

}

phaserConfig.scene = {
    create: create,
    update: update
};

let game;

//Exported Module
const GameManager = {
    init: () => {
        game = new Phaser.Game(phaserConfig);
        console.log('Game initialized');
    },
};

module.exports = GameManager;