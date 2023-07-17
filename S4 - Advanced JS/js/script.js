'use strict';

function verif(x){
    if (x > 20 || x < 1){
        document.querySelector("h1").innerHTML = "Please enter a number between 1 and 20"
        return false
    }
    else{
        return true
    }
}

function check(x){
    document.querySelector("h1").innerHTML = "Guess My Number!"
    var nbj = document.querySelector("#nb").value;
    var score = document.querySelector(".score").innerHTML;
    if (verif(nbj)){
        if (score == 0){
            document.querySelector("h1").innerHTML = 'GAME OVER';
            document.querySelector(".message").innerHTML = 'You have no more tries!😢😢';
            document.querySelector(".number").innerHTML = x;
            document.querySelector(".check").disabled;
        }
        else{
            if (x == nbj){
                document.querySelector(".message").innerHTML="rak rbe7et";
                var highScore = document.querySelector(".highscore").innerHTML;
                if(score > highScore){
                    document.querySelector(".highscore").innerHTML= score;
                }
                document.querySelector(".number").innerHTML = x;
                document.querySelector("h1").innerHTML = "Congratulations"
                document.querySelector(".congratulations").style.display = "block";
        
            }
            else if (x > nbj){
                document.querySelector(".message").innerHTML="el ra9am eli khatrtou sghir";
                document.querySelector(".score").innerHTML= score - 2
            }
            else {
                document.querySelector(".message").innerHTML="el ra9am eli khatrtou kbir";
                document.querySelector(".score").innerHTML= score - 2
            }
        }
    }
    
    
}



function again(){
    document.querySelector(".number").innerHTML = "?";
    document.querySelector(".score").innerHTML= "20";
    document.querySelector(".congratulations").style.display = "none";
    document.querySelector("#nb").value = "";
    document.querySelector("h1").innerHTML = "Guess My Number!"
    document.querySelector(".message").innerHTML="Start guessing...";
    
}



document.querySelector(".congratulations").style.display = "none";
var nbo = Math.floor(Math.random()*20)+1;

document.querySelector(".check").addEventListener('click',()=>{
    check(nbo)
})





document.querySelector("#btAgain").addEventListener('click',()=>{
    // location.reload();
    nbo = Math.floor(Math.random()*20)+1;
    again()
})




