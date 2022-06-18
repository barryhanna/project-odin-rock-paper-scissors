// get all the buttons that don't have 'play' in their id.
const buttons = Array.from(document.querySelectorAll('button:not([id*=play])'));
const resultsDiv = document.getElementById('results');
const choices = ['Rock', 'Paper', 'Scissors'];
const playerScoreDisplay = document.getElementById('playerScore');
const compScoreDisplay = document.getElementById('compScore');
const playAgain = document.getElementsByClassName('play-again')[0];
const playAgainBtn = document.getElementById('play-again--btn');

let compScore = 0;
let playerScore = 0;
let gameOver = false;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function handleClick(e) {
  const playerSelection = e.target.dataset.value;
  playRound(playerSelection, computerPlay());
}

function showResults(result) {
  resultsDiv.textContent = result;
}

buttons.forEach((button) => button.addEventListener('click', handleClick));

function playRound(playerSelection, computerSelection) {
  if (!gameOver) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let result = '';
    if (player === computer) {
      result = `Draw: ${player} and ${computer}`;
    } else if (player === 'rock' && computer === 'scissors') {
      result = `You Win! Rock beats scissors`;
      playerScore++;
    } else if (player === 'paper' && computer === 'rock') {
      result = `You Win! Paper beats rocks`;
      playerScore++;
    } else if (player === 'scissors' && computer === 'paper') {
      result = `You Win! Scissors beats paper`;
      playerScore++;
    } else if (computer === 'rock' && player === 'scissors') {
      result = `You Lose! Rock beats scissors`;
      compScore++;
    } else if (computer === 'paper' && player === 'rock') {
      result = `You Lose! Paper beats rocks`;
      compScore++;
    } else if (computer === 'scissors' && player === 'paper') {
      result = `You Lose! Scissors beats paper`;
      compScore++;
    }
    updateScore();
    showResults(result);
    checkGameOver();
  }
}

function game() {
  const result = playRound(player, computerPlay());
  console.log(result);
  if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lost! ${playerScore} - ${computerScore}`);
  } else {
    console.log('Draw');
  }
}

function checkGameOver() {
  if (compScore === 5 || playerScore === 5) {
    gameOver = true;
    const winner = playerScore > compScore ? 'player' : 'computer';
    resultsDiv.innerText = `Game Over. ${winner} wins`;
    enableButtons(false);
    showPlayButton();
  }
}

function enableButtons(enable) {
  buttons.forEach((button) => (button.disabled = !enable));
}

function showPlayButton() {
  playAgain.classList.toggle('visible');
}

function initializeGame() {
  compScore = 0;
  playerScore = 0;
  updateScore();
  resultsDiv.innerText = '';
  gameOver = false;
  enableButtons(true);
  showPlayButton();
}

function updateScore() {
  playerScoreDisplay.innerText = playerScore;
  compScoreDisplay.innerText = compScore;
}

playAgain.addEventListener('click', initializeGame);

updateScore();
