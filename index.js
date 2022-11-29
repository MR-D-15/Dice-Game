function diceRoll(){
    var x = Math.floor(Math.random()*6)+1;
var y = Math.floor(Math.random()*6)+1;

$("#playerOne").attr("src", "Images/dice"+x+".png");
$("#playerTwo").attr("src", "Images/dice"+y+".png");

if(x==y)
    $(".result").text("DRAW!");

else if(x>y)
    $(".result").text("Player 1 WINS!");

else
    $(".result").text("Player 2 WINS!");
}