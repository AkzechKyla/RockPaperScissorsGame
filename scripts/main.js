/* STEPS
1. Buttons
2. Get computer's move
3. Compare to player's move
*/

const availableMoves = ['rock', 'paper', 'scissors'];

function playGame(playerMove) {
    let randomMove = Math.floor(Math.random() * availableMoves.length);
    let computerMove = availableMoves[randomMove];

    if (playerMove === availableMoves[0]) {
        // if player's move is rock
        if (computerMove === availableMoves[1]) {
            // if computer's move is paper
            console.log('Paper beats Rock. You lost.');
        } else if (computerMove === availableMoves[2]) {
            // if computer's move is scissors
            console.log('Rock beats Scissors. You win.')
        } else if (playerMove === availableMoves[0]) {
            console.log("It's a TIE!");
        }
    } else if (playerMove === availableMoves[1]) {
        // if player's move is paper
        if (computerMove === availableMoves[0]) {
            // if computer's move is rock
            console.log('Paper beats Rock. You win.');
        } else if (computerMove === availableMoves[2]) {
            // if computer's move is scissors
            console.log('Scissors beat Paper. You lost.');
        } else if (playerMove === availableMoves[1]) {
            console.log("It's a TIE!");
        }
    } else if (playerMove === availableMoves[2]) {
        // if player's move is scissors
        if (computerMove === availableMoves[0]) {
            // if computer's move is rock
            console.log('Rock beats Scissors. You lost.');
        } else if (computerMove === availableMoves[1]) {
            // if computer's move is paper
            console.log('Scissors beat Paper. You win.');
        } else if (playerMove === availableMoves[2]) {
            console.log("It's a TIE!");
        }
    }
}
