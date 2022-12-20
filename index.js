var d1=Math.random();
var s=Math.floor(d1*6+1);
var d="dice"+s+".png";
$("img")[0].setAttribute("src",d);
var d2=Math.random();
var s1=Math.floor(d2*6+1);
var d3="dice"+s1+".png";
$("img")[1].setAttribute("src",d3);
if(s>s1){
    $("h1").html("player 1 wins");
}
else if(s<s1){
    $("h1").html("player 2 wins");  
}
else{
    $("h1").html("draw");
}
