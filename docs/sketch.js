let video;
let vid;
let poseNet;
let poses = [];

function preload() {
    img = loadImage('glasses.svg');
}

function setup() {
    createCanvas(640, 120);
    video = createCapture(VIDEO);
    video.size(width, height * 4);

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
        poses = results;
    });
    // Hide the video element, and just show the canvas
    video.hide();
}


function modelReady() {
    select('#status').html('Model Loaded');
}

// function mousePressed() {
//     console.log(JSON.stringify(poses))
// }

function draw() {
    background(255, 0);
    image(video, 0, -160, width, height * 4);
    strokeWeight(2);

    // For one pose only (use a for loop for multiple poses!)
    if (poses.length > 0) {
        let pose = poses[0].pose;
        let rightEye = pose['rightEye'];
        //     ellipse(rightEye.x, rightEye.y-200, 20, 20);

        //     // Create a yellow ellipse for the right eye
        //     fill(255, 215, 0);
        let leftEye = pose['leftEye'];
        //     ellipse(leftEye.x, leftEye.y-200, 20, 20);
        var d = leftEye.x - rightEye.x
        var d2 = leftEye.x + rightEye.x
            //console.log(d)

        image(img, rightEye.x - d / 2, rightEye.y - 170, 2 * d + 16, d / 2 + 12);
        if (400 < d2 < 600) {
            select('#bg').position(-100 + windowWidth / 1.6 - d2 / 3.5, -windowHeight / 10 - leftEye.y / 6);
        } else if (400 < d2 < 780) {
            select('#bg').position(-100 + windowWidth / 1.6 - d2 / 80, -windowHeight / 10 - leftEye.y / 6);
        } else if (d2 < 400) { select('#bg').position(-100 + windowWidth / 1.6 - 5, -windowHeight / 10 - leftEye.y / 6); }
    }
}