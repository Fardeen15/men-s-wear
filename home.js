var i = 0;
var images = [];
var time = 2000;
images[0] = "images/slideimg.jpg"
images[1] = "images/pants.png"
images[2] = "images/slideimg2.jpeg"

function swapPic(){
 document.getElementById("image").src = images[i];
if(i < images.length-1){
    i++
}
else{
    i = 0;
}
setTimeout("swapPic()", time)
}
window.onload = swapPic;
 


// function changepic(){
//     document.getElementById("hover").src="images/pants.jpg";
//     document.getElementsByClassName("hover").src="images/pants.jpg";

// }