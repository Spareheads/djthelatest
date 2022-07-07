song = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
 
function setup()
{
canvas = createCanvas(600, 500);
canvas.center();
 
 
video= createCapture(VIDEO);
video.hide();
 
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", result);
}
 
 
function modelLoaded() {
console.log("Model Loaded");
 
 
}
 
function result(Gotresults){
if(Gotresults.length > 0){
 
    console.log(Gotresults);
leftWristx = Gotresults[0].pose.leftWrist.x;
leftWristy = Gotresults[0].pose.leftWrist.y;
 
console.log("leftWristx = " + leftWristx +", leftWristy = "+ leftWristy);
 
rightWristx = Gotresults[0].pose.rightWrist.x;
rightWristy = Gotresults[0].pose.rightWrist.y;
 
console.log("rightWristx = " + rightWristx +", rightWristy = "+ rightWristy);
}
   
 
 
}
 
function draw()
{
 
 
image(video, 0, 0, 600, 500);
 
}
 
function preload()
{
song = loadSound("music.mp3")
}
 
 
function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}
 
