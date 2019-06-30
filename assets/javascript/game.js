//------------------------------------------------------------------//
var inProgress = false;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compLetter; //(letter that the computer chooses)
var randomNumber;
var playerInput; //(letter the player chooses)
var wins = 0; //(number of wins)
var losses = 0; //(number of losses)
var guessesLeft; //(number of guesses)
var wrongGuesses; //(array of the letters already chosen)
//------------------------------------------------------------------//
function NewGame() {
	console.log("new game start")
	randomNumber = Math.floor(Math.random() * 25);
	console.log(randomNumber)
	compLetter = letters[randomNumber]
	console.log(compLetter)
	guessesLeft = 8
	wrongGuesses = []
	inProgress = true
}
//------------------------------------------------------------------//
function GameOver() {
	if (losses >= 3) {
		var gameOverScreen = document.createElement("img");
		gameOverScreen.src = "assets/images/game-over.gif";
		document.body.prepend(gameOverScreen);
		document.getElementById("gamePlayScreen").style.display = "none";
		console.log("Gmae Over Man", losses)
	} else {
		var gameWinScreen = document.createElement("img");
		gameWinScreen.src = "assets/images/win-screen.png";
		document.body.prepend(gameWinScreen);
		document.getElementById("gamePlayScreen").style.display = "none";
		console.log("Winner Winner", wins)
    }
        document.getElementById("redo").style.visibility = "visible";
}
//------------------------------------------------------------------//
function GameLoop() {
	if (playerInput === compLetter) {
		wins++;
		document.getElementById("wins").innerHTML = wins;
		if (wins >= 3) {
			GameOver();
		} else {
			NewGame();
		}
	} else {
		guessesLeft--;
		document.getElementById("guesses-left").innerHTML = guessesLeft;
		if (guessesLeft <= 0) {
			losses++;
			document.getElementById("losses").innerHTML = losses;
			if (losses >= 3) {
				GameOver();
			} else {
				NewGame();
			}
		} else {
			wrongGuesses.push(playerInput);
		}
	}
	console.log("compLetter", compLetter);
	console.log("playerInput", playerInput);
	console.log(wins);
	console.log("losses", losses);
	document.getElementById("so-far").innerHTML = wrongGuesses;
	console.log("wrongGuesses", wrongGuesses);
}
//------------------------------------------------------------------//
function PlayerKeypress() {
	var tempValue = document.getElementById("playerInput").value;
	playerInput = tempValue.toLowerCase();
	console.log(playerInput)
	if (!inProgress) {
		NewGame();
	}
	GameLoop();
	document.getElementById("playerInput").value = "";
}
//------------------------------------------------------------------//
function RestartGame(){
    location.reload();
}