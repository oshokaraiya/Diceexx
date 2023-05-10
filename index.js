var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;

var image1 = "images/" + "dice"+num1+".png";
var image2 = "images/" + "dice"+num2+".png";


var i1 = document.querySelectorAll("img")[0];
var i2 = document.querySelectorAll("img")[1];

i1.setAttribute("src",image1);
i2.setAttribute("src",image2);


if(num1>num2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw";
}