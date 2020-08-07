let x = 0;
let y = 0;

let currentMX = 0;
let newMX = 0;
let currentMY = 0;
let newMY = 0;

var compgif_loadImg, compgif_createImg;
var mbitgif_loadImg, mbitgif_createImg;
var soldgif_loadImg, soldgif_createImg;

function preload() {
    compgif_createImg = createImg("computer.gif");
    mbitgif_createImg = createImg("microbit.gif");
    soldgif_createImg = createImg("solder.gif");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    x1 = displayWidth / 4;
    x2 = displayWidth * 0.75;
    y1 = displayHeight / 4;
    y2 = displayHeight * 0.75;


    compgif_createImg.position(width / 2, height / 2);
    mbitgif_createImg.position(width / 2, height / 2);
    soldgif_createImg.position(width / 2, height / 2);

    frameRate(10);
}

function draw() {

    //mouse position
    currentMX = mouseX;
    currentMY = mouseY;

    if ((mouseX >= 0 && mouseX <= displayWidth) && (mouseY >= 0 && mouseY <= y1)) {

        compgif_createImg.position(currentMX, currentMY);

    } else if ((mouseX >= 0 && mouseX <= x1) && (mouseY >= y1 && mouseY <= y2)) {

        mbitgif_createImg.position(currentMX, currentMY);

    } else if ((mouseX >= x2 && mouseX <= displayWidth) && (mouseY >= y1 && mouseY <= y2)) {

        soldgif_createImg.position(currentMX, currentMY);

    } else if

    ((mouseX >= 0 && mouseX <= displayWidth) && (mouseY >= y2 && mouseY <= displayHeight)) {
        compgif_createImg.position(100, 25);
        mbitgif_createImg.position(100, 200);
        soldgif_createImg.position(100, 300);
    }

    //store mouse values
    newMX = currentMX;
    newMY = currentMY;

}
