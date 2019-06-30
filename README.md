# Psychic-Game
<!-- Pseudo Code Doc -->
var inProgress = false;
var letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var compLetter; //letter that the computer chooses
var randomNumber; //random number between 0 and 25, used as the index for selecting a letter
var playerInput; //letter the player chooses
var wins = 0; //number of wins
var losses = 0; //number of losses
var guessesLeft; //number of guesses
var wrongGuesses; //array of the letters already chosen
            
start function NewGame
    randomNumber = random number between 0 and 25
    compLetter = letters[randomNumber]
    guessesLeft = 8
    wrongGuesses = []
    inProgress = true
end function NewGame
<!-- ____________________________________________________________ -->
start function GameOver
    if losses >= 3
        game over - loss
    else
        game over - win
    end if else
end function GameOver
<!-- ____________________________________________________________ -->
start function GameLoop
    if playerInput === compLetter
        wins++;
        if wins >= 3
            call function GameOver
        else
            call function NewGame
        end if else
    else
        guessesLeft--;
        if guessesLeft <= 0
            losses++;
            if losses >= 3
                call function GameOver
            else
                call function NewGame
            end if else
        else
            add playerInput to wrongGuesses
        end if else
    end if else
end function GameLoop
<!-- ____________________________________________________________ -->
start function PlayerKeypress
    var tempInput = html input value
    playerInput = tempImput.value.toLowerCase();
    if !inProgress
        call function NewGame
    end if
    call function GameLoop
    set the html input to blank value
end function PlayerKeypress