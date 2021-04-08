document.elementById("result_object_name").innerHTML = result[0]. label;
document.elementById("result_object_accuracacy").innerHTML = result[0].confidence.toFixed(3);
{
}function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded)
}

function draw() {
image(video, 0, 0, 300, 300);
classfier.classify(classify, gotresult);
}

function modelLoaded() {
console.log('Model Loaded')
}

function gotResult(error, results) {
if(error) {
console.error(error);
} else {
console.log(results);
}