//Pain 8/17/20
//GH:eeriley99.github.io

let wH = 800;
let wW = 800;
let offsetwH = wH * 0.7;

function setup() {
    createCanvas(wW, wH);
    cursor('https://eeriley99.github.io/code_sketchbook/icons-master/spray_can.gif');
}

function draw() {
    stroke(0, 0, 0, 70); //black
    keyTyped(); //type key for brush color
    // 'v' violet
    // 'i' indigo
    // 'b' blue
    // 'g' green
    // 'y' yellow
    // 'o' orange
    // 'r' red
    // 'k' black
    // 'e' erase

    //type 'c' to clear canvas

    spray(); //canvas click triggers spray
    frame();
}

function spray() {
    if (mouseIsPressed) {
        for (let i = 0; i < 200; i++) {
            let leftWall = 45;
            let rightWall = (wW - 45);
            let topWall = 45;
            let bottomWall = (offsetwH - 45);
            let xc = constrain(mouseX, leftWall, rightWall);
            let yc = constrain(mouseY, topWall, bottomWall);
            let x = random(-10, 10);
            let y = random(-10, 10);
            if (dist(0, 0, x, y) < 100) {
                ellipseMode(CENTER);
                ellipse(xc + x, yc + y, 1, 1);
            }
        }
    }
}


function keyTyped() {
    if (key === 'v') {
        stroke(148, 0, 211, 50); //violet
    }
    if (key === 'i') {
        stroke(75, 0, 130, 50); //indigo
    }
    if (key === 'l') {
        stroke(0, 0, 255, 50); //blue
    }
    if (key === 'g') {
        stroke(0, 255, 0, 50); //green
    }
    if (key === 'y') {
        stroke(255, 255, 0, 50); //yellow
    }
    if (key === 'o') {
        stroke(255, 127, 0, 50); //orange
    }
    if (key === 'r') {
        stroke(255, 0, 0, 50); //red
    }
    if (key === 'b') {
        stroke(0, 0, 0, 70); //black
    }
}

function frame() {
    noFill();
    strokeWeight(6);
    strokeWeight(6);
    rect(0, 0, wW, offsetwH);
    rect(35, 35, wW - 70, offsetwH - 70);
    strokeWeight(1);
    /*
    strokeWeight(1);
    line(0, 0, 35, 35); //NWline
    line(windowWidth / 2, 0, windowWidth / 2 - 35, 35); //NEline
    line(windowWidth / 2, offsetwH, windowWidth / 2 - 35, offsetwH - 35); //SEline
    line(0, offsetwH, 35, 640 - 35); //SWline
    */

};
