const availableMoves = ['Rock', 'Paper', 'Scissors'];
const score = {
    won: 0,
    lost: 0,
    draw: 0
}
const defaultTimeout = 2500;

function playGame(playerMove) {
    let randomMove = Math.floor(Math.random() * availableMoves.length);
    let computerMove = availableMoves[randomMove];
    let gameState = '';
    let message = '';

    if (playerMove === availableMoves[0]) {
        // if player's move is rock
        if (computerMove === availableMoves[1]) {
            // if computer's move is paper
            gameState = 'lost';
            message = 'Paper beats Rock.';
        } else if (computerMove === availableMoves[2]) {
            // if computer's move is scissors
            gameState = 'won';
            message = 'Rock beats Scissors.';
        } else if (playerMove === availableMoves[0]) {
            gameState = 'draw';
        }
    } else if (playerMove === availableMoves[1]) {
        // if player's move is paper
        if (computerMove === availableMoves[0]) {
            // if computer's move is rock
            gameState = 'won';
            message = 'Paper beats Rock.';
        } else if (computerMove === availableMoves[2]) {
            // if computer's move is scissors
            gameState = 'lost';
            message = 'Scissors beats Paper.';
        } else if (playerMove === availableMoves[1]) {
            gameState = 'draw';
        }
    } else if (playerMove === availableMoves[2]) {
        // if player's move is scissors
        if (computerMove === availableMoves[0]) {
            // if computer's move is rock
            message = 'Rock beats Scissors.';
            gameState = 'lost';
        } else if (computerMove === availableMoves[1]) {
            // if computer's move is paper
            gameState = 'won';
            message = 'Scissors beats Paper.';
        } else if (playerMove === availableMoves[2]) {
            gameState = 'draw';
        }
    }

    displayMoveAndScore(gameState, playerMove, computerMove, message);
}

function getPlayerMoveImage(playerMove) {
    let playerMoveImage = '';

    if (playerMove === 'Rock') {
        playerMoveImage = document.getElementById('player-rock');
    } else if (playerMove === 'Paper') {
        playerMoveImage = document.getElementById('player-paper');
    } else if (playerMove === 'Scissors') {
        playerMoveImage = document.getElementById('player-scissors');
    }

    return playerMoveImage;
}

function getComputerMoveImage(computerMove) {
    let computerMoveImage = '';

    if (computerMove === 'Rock') {
        computerMoveImage = document.getElementById('computer-rock');
    } else if (computerMove === 'Paper') {
        computerMoveImage = document.getElementById('computer-paper');
    } else if (computerMove === 'Scissors') {
        computerMoveImage = document.getElementById('computer-scissors');
    }

    return computerMoveImage;
}

function displayFeedbackMessage(gameState, message) {
    const p1 = document.getElementById('feedback1');
    const p2 = document.getElementById('feedback2');

    setTimeout(() => {
        p1.innerHTML = `${message}`;

        if (gameState === 'won') {
            p2.innerHTML = 'YOU WON!';
        } else if (gameState === 'lost') {
            p2.innerHTML = 'YOU LOST!';
        } else if (gameState === 'draw') {
            p1.innerHTML = '';
            p2.innerHTML = "IT'S A TIE!";
        }
    }, defaultTimeout)

    const top = document.querySelector('.top-container');
    top.addEventListener('click', () => {
        p1.innerHTML = '';
        p2.innerHTML = '';
    });
}

function displayScoreBoard() {
    setTimeout(() => {
        document.querySelector('.won-score').innerHTML = `WON = ${score.won}`;
        document.querySelector('.lost-score').innerHTML = `LOST = ${score.lost}`;
        document.querySelector('.draw-score').innerHTML = `DRAW = ${score.draw}`;
    }, defaultTimeout);
}

function displayMoveAndScore(gameState, playerMove, computerMove, message) {
    let playerMoveImage = getPlayerMoveImage(playerMove);
    let computerMoveImage = getComputerMoveImage(computerMove);

    if (gameState === 'won') {
        score.won += 1;
    } else if (gameState === 'lost') {
        score.lost += 1;
    } else if (gameState === 'draw') {
        score.draw += 1;
    }

    displayFeedbackMessage(gameState, message);
    displayScoreBoard();

    setTimeout(() => {
        playerMoveImage.style.display = 'block';
        computerMoveImage.style.display = 'block';
    }, defaultTimeout);

    const top = document.querySelector('.top-container');
    top.addEventListener('click', () => {
        playerMoveImage.style.display = 'none';
        computerMoveImage.style.display = 'none';
    });

    console.log(score);
}

function hideMainContainer() {
    const moveButtons = document.querySelectorAll('.move-img');
    const base = document.querySelector('.base-container');
    const top = document.querySelector('.top-container');

    moveButtons.forEach((button) => {
       button.addEventListener('click', () => {
        animateAfterMove();
        base.classList.add('fade');
        top.classList.add('fade-in', 'appear');
        console.log(`Play again. Base: ${base.classList}`);
        console.log(`Play again. Top: ${top.classList}`);
       });
    });
}

function returnToGame() {
    const top = document.querySelector('.top-container');
    const base = document.querySelector('.base-container');

    setTimeout(() => {
        top.addEventListener('click', () => {
            top.classList.remove('fade-in', 'appear');
            base.classList.remove('fade');
            console.log(`Returning to Game: ${base.classList}`);
            console.log(`Returning to Game: ${top.classList}`);
        }, {once: true});
    }, defaultTimeout);
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
    rightMove.style.animation = 'slideInRight 1s ease-in-out, moveUpDown 1.5s linear 1s';

    returnToGame();
}

hideMainContainer();
