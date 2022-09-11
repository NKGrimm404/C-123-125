noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
input="";
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x is "+noseX+"Nose y is "+ noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("left wrist is "+leftWristX+"right wrist is "+rightWristX+"and the difference is "+difference);
        

    }
}

function modelLoaded(){
    console.log("posenet model is initialized");
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="Width and Height will be- "+difference+" px";
    fill('#008080');
    stroke('##30D5C8');
    text('Advaith',175,275);
    textSize(difference);
}
