/* STEPS
1. Buttons
2. Get computer's move
3. Compare to player's move
4. Score
*/

const availableMoves = ['Rock', 'Paper', 'Scissors'];
const score = {
    won: 0,
    lost: 0,
    draw: 0
}

function playGame(playerMove) {
    let randomMove = Math.floor(Math.random() * availableMoves.length);
    let computerMove = availableMoves[randomMove];
    let gameState = '';

    if (playerMove === availableMoves[0]) {
        // if player's move is rock
        if (computerMove === availableMoves[1]) {
            // if computer's move is paper
            gameState = 'lost';
        } else if (computerMove === availableMoves[2]) {
            // if computer's move is scissors
            gameState = 'won';
        } else if (playerMove === availableMoves[0]) {
            gameState = 'draw';
        }
    } else if (playerMove === availableMoves[1]) {
        // if player's move is paper
        if (computerMove === availableMoves[0]) {
            // if computer's move is rock
            gameState = 'won';
        } else if (computerMove === availableMoves[2]) {
            // if computer's move is scissors
            gameState = 'lost';
        } else if (playerMove === availableMoves[1]) {
            gameState = 'draw';
        }
    } else if (playerMove === availableMoves[2]) {
        // if player's move is scissors
        if (computerMove === availableMoves[0]) {
            // if computer's move is rock
            gameState = 'won';
        } else if (computerMove === availableMoves[1]) {
            // if computer's move is paper
            gameState = 'lost';
        } else if (playerMove === availableMoves[2]) {
            gameState = 'draw';
        }
    }

    displayFeedbackAndScore(gameState, playerMove, computerMove);

    console.log(score);
}

function displayFeedbackAndScore(gameState, playerMove, computerMove) {
    if (gameState === 'won') {
        score.won += 1;
        console.log(`${playerMove} beats ${computerMove}. You won.`);
    } else if (gameState === 'lost') {
        score.lost += 1;
        console.log(`${computerMove} beats ${playerMove}. You lost.`);
    } else if (gameState === 'draw') {
        score.draw += 1;
        console.log("It's a TIE!");
    }
}
