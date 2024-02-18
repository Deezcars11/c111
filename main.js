Webcam.set ({
    width : 350, 
    height : 300,
    image_format : "png",
    png_quality :90
});
    camera = document.getElementById('camera');

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id= "captured_image " src = "'+data_uri+'"/>';
    });
}
console.log('ml5 version-', ml5.version);
classifier = ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/yNmQ3hwPv/model.json', modelLoaded);
function modelLoaded()
{
    console.log("model is Loaded");

}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = toSpeak;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak (utterThis);
}