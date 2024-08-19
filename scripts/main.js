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

    console.log(score);
}

function testAnimation() {
    const moveButtons = document.querySelectorAll('.move-img');
    const base = document.querySelector('.base-container');

    moveButtons.forEach((button) => {
       button.addEventListener('click', () => {
        animateAfterMove();
        base.classList.toggle('fade');
        disableClickables();
       });
    });
}

function disableClickables() {
    const moveButtons = document.querySelectorAll('.move-img');
    const moveTexts = document.querySelectorAll('.moves-text');

    moveButtons.forEach((button) => {
        button.style.cursor = 'auto';
    });

    moveTexts.forEach((text) => {
        text.style.cursor = 'auto';
    });
}

function animateAfterMove() {
    const leftMove = document.querySelector('.left-loading-move');
    const rightMove = document.querySelector('.right-loading-move');

    // reset animation style
    leftMove.style.animation = 'none';
    rightMove.style.animation = 'none';

    // forces a reflow, allowing the animation to restart
    void leftMove.offsetWidth;
    void rightMove.offsetWidth;

    leftMove.style.animation = 'slideInLeft 1s ease-in-out, moveUpDown 1.5s linear 1s';
    leftMove.style.animationFillMode = 'forwards';
    rightMove.style.animation = 'slideInRight 1s ease-in-out, moveUpDown 1.5s linear 1s';
    rightMove.style.animationFillMode = 'forwards';
}

testAnimation();
