function modelLoaded(){
    console.log("Model Loaded!")
}

classifier=ml5.imageClassifier('MobileNet', modelLoaded)

function check()
{
    img= document.getElementById("cricket")
    classifier.classify(img, gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("").innerHTML=results[0].label
}
}