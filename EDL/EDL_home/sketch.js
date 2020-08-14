//data
let x, y, a, b, l, m;
let Wander;

var compgif_loadImg, compgif_createImg;
var filamentgif_loadImg, filamentgif_createImg;
var microbitgif_loadImg, microbitgif_createImg;

function preload() {
    compgif_createImg = createImg("computer.gif");
    filamentgif_createImg = createImg("filament.gif");
    microbitgif_createImg = createImg("microbit.gif");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    Wander = new Wand();
    frameRate(200);
}

function draw() {
    Wander.step();
    Wander.display();
}

//Wander class
class Wand {
    //location
    constructor() {
        x = 10;
        y = 100;
        a = 0;
        b = 300;
        l = 300;
        m = 600;
    }
    //display
    display() {
        //action (step)
        compgif_createImg.position(x, y);
        microbitgif_createImg.position(l, m);
        filamentgif_createImg.position(a, b);

    }

    step() {
        let choice = int(random(4));
        if (choice == 0) {
            x, a++, l--;
        } else if (choice == 1) {
            x, a--, l++;
        } else if (choice == 2) {
            y, b--, m++;
        } else {
            y, b++, m--;
        }
    }
}
