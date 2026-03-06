let isCaught = false;
let housefly;
let hunterimgs = [];
let flysheet;
let bgs = [];
let leaves = [];
let huntersall = [];
let predator;
let score = 0;
let gameState = "start";

function preload() {
    flysheet = loadImage("./assets/fly.png");
    bgs[0] = loadImage("./assets/bg3.png");
    bgs[1] = loadImage("./assets/bg2.png");
    bgs[2] = loadImage("./assets/bg1.png");
    huntersall[0] = loadImage("./assets/pred1.png");
    huntersall[1] = loadImage("./assets/pred2.png");
    huntersall[2] = loadImage("./assets/pred3.png");
}

function setup() {
    createCanvas(400, 400);
    dodgeLine = height / 2;
    angleMode(DEGREES);
    for (let i = 0; i < 36; i += 1) {
        let imgIndex = i % 3;
        let startScale = 0.01 + (i * (6 / 36));
        leaves.push(new Leaves(bgs[imgIndex], startScale));
    }
}

function startGame() {
    isCaught = false;
    score = 0;
    housefly = new Fly(flysheet, 0, height / 2, 20, 20, 150);
    predator = new Predator(huntersall, random(width, 2 * width), random(-180, 180), 5, 250);
    gameState = "playing";
}

function mousePressed() {
    if (gameState == "start" || gameState == "gameover") {
        if (mouseX > width / 2 - 60 && mouseX < width / 2 + 60 &&
            mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
            startGame();
        }
    }
}

function draw() {
    background(10, 25, 15);

    // leaves always animate in background across all screens
    leaves.sort((a, b) => a.startScale - b.startScale);
    let splitIndex = floor(leaves.length * 0.26);
    for (let i = 0; i < splitIndex; i++) {
        leaves[i].draw();
        leaves[i].move(0.01);
    }

    if (gameState == "start") {
        // front leaves
        for (let i = splitIndex; i < leaves.length; i++) {
            leaves[i].draw();
            leaves[i].move(0.01);
        }
        // title
        fill(255);
        textSize(40);
        textAlign(CENTER, CENTER);
        text("FLYSCAPE", width / 2, height / 2 - 60);
        // button
        fill(0, 150, 0);
        rectMode(CENTER);
        rect(width / 2, height / 2, 120, 40, 10);
        fill(255);
        textSize(20);
        text("START", width / 2, height / 2);

    } else if (gameState == "playing") {
        // predator behind front leaves
        predator.draw();
        predator.move();
        // front leaves
        for (let i = splitIndex; i < leaves.length; i++) {
            leaves[i].draw();
            leaves[i].move(0.01);
        }
        // fly on top
        housefly.draw();
        housefly.move();

        score++;
        if (score > 60) {
            housefly.checkCollision(predator);
        }
        if (isCaught) {
            gameState = "gameover";
        }

    } else if (gameState == "gameover") {
        // front leaves
        for (let i = splitIndex; i < leaves.length; i++) {
            leaves[i].draw();
            leaves[i].move(0.01);
        }
        // game over text
        fill(255);
        textSize(40);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width / 2, height / 2 - 60);
        // button
        fill(0, 150, 0);
        rectMode(CENTER);
        rect(width / 2, height / 2, 120, 40, 10);
        fill(255);
        textSize(20);
        text("RESTART", width / 2, height / 2);
    }
}