status = "";
objects = [];
img = "";
function preload(){
img=loadImage("dog_cat.jpg")
}
function setup(){
canvas = createCanvas(380,380);
canvas.center();
camera = createCapture(VIDEO);
camera.size(380,380);
camera.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "detetcting status : detecting objects";
}
function modelLoaded(){
    console.log(" Mission Modelloaded successfully");
    status = true;
}

function draw(){
image(camera,0,0,380,380)
    
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(camera,gotResult);
        for(i=0 ;i<objects.length; i++){
            document.getElementById("status").innerHTML="status : object detected";
            document.getElementById("number").innerHTML="number of objects deteected : "+objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
        text(objects[i] .label+""+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].height,objects[i].width);
        } 
        }
    }
function gotResult(error,results){
    if(error){
        console.log("Error 404"+error)
    }
    console.log("results are obtained : "+results);
    objects = results;
    }