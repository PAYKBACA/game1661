function startGame(){
    gameLoop()
}

var count = 0;
var personVis = false;

function gameLoop(){
    personVis = !personVis

    if (personVis == true){
        var classToset = "character visible"
    }
    else{
        var classToset = "character hidden"
    }

    var gamezone = document.getElementById("gamezone");

    for( i = 0 ; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = "Персонаж";
        gamezone.children[i].onclick = function(){score-=2;
            document.getElementById("score").innerHTML = score;};
    }

    var randomNum = Math.floor(Math.random()*8) +1;

    gamezone.children[randomNum-1].innerHTML = "Лишний";

    gamezone.children[randomNum-1].onclick = function(){score+=1;
        document.getElementById("score").innerHTML = score;};

    gamezone.children[randomNum-1].className = classToset + " naruto";

    count += 1;
    if (count <12){
        setTimeout(gameLoop, personVis ? 1000:3000);
    }
    else{
        alert("Игра окончена");
        alert("Твой счет " +score);
    }
}