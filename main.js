nosex = 0 ;
nosey=0;
juma = " ";
luma = " ";
puma = " "
function preload(){
    lips = loadImage('https://i.postimg.cc/m2LRKnCt/il-fullxfull-2688313853-4b66-1.png');
mustache = loadImage('https://i.postimg.cc/QCLgH5gy/il-fullxfull-2688313853-4b66.png');
nose1 = loadImage('https://i.postimg.cc/Y9yn8bcD/images.png');
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotpose);
}
function hi(){
    juma = "set";
    luma = " ";
    puma = " ";
}
function bye(){
    luma = "set";
    juma = " ";
    puma=" "
}
function be(){
    luma=" ";
    juma=" ";
    puma="set";
}
function draw(){
image(video,0,0,300,300);
if(juma=="set"){
    image(mustache,nosex-20,nosey-10,40,40);
}
if(luma=="set"){
    image(lips,nosex-20,nosey+3,40,40);
}
if(puma=="set"){
    image(nose1,nosex-40,nosey-55,80,80);
}

}
function gotpose(result){
    if(result.length>0){
        console.log(result);
        console.log("nose x" + result[0].pose.nose.x);
        console.log("nose y"+result[0].pose.nose.y);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
    }
}
function modelloaded(){
console.log("model is loaded");
}
function takesnapshot(){
    save('name.png');
}