music1 = "";
music2 = "";

leftWristx = 0;
leftWristy = 0;

rightWristx = 0;
rightWristy = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}