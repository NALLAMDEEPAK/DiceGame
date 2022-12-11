var randomNumber1=Math.random();
var n=Math.floor((randomNumber1*6)+1);
var setimg="dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src",setimg);
var randomNumber2=Math.random();
var m=Math.floor((randomNumber2*6)+1);
var setimg1="dice"+m+".png";
document.querySelectorAll("img")[1].setAttribute("src",setimg1);
if(n>m){
    document.querySelector("h1").innerHTML="player 1 wins"
}
else if(n<m){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}