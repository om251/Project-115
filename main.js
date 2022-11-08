function preload(){

}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.position(100, 250)
    Video=createCapture(VIDEO);
    Video.size(290,290);
    Video.hide();
    Posenet=ml5.poseNet(Video, modelLoaded);
    Posenet.on("pose",gotPoses);
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
    }
    console.log("noseX = " + noseX +", noseY = " + noseY);
}



function take_snapshot(){
    save("T[owudiygef].png");
}

function modelLoaded(){
    console.log("IT IS NOT GOING TO WORK SO CLOSE THE CONSOLE WINDOW");

}

function draw(){
    image(Video,5,5,290,290);
    
}

function take_snapshot(){
    save("T[owudiygef].png");
}