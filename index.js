var randomNumber1=Math.floor(Math.random() * 6) + 1; //
var  randomImage="dice" + randomNumber1 + ".png";   //
var imagesource="images/" + randomImage;    //


var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imagesource);

var random2=Math.floor(Math.random() * 6) + 1;
var  randomImage1="images/dice" + random2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src",randomImage1);

if (randomNumber1>random2){
    document.querySelector("h1").innerHTML="😆Player 1 Wins"
}else if(random2>randomNumber1){
    document.querySelector("h1").innerHTML="😜Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw🫢"
}
