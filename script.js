const buttons = Array.from(document.querySelectorAll('button'));
const resultsDiv = document.getElementById('results');
const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function handleClick(e) {
  const playerSelection = e.target.dataset.value;
  const result = playRound(playerSelection, computerPlay());
  console.log(result);
}

function showResults(result) {
  resultsDiv.textContent = result;
}

buttons.forEach((button) => button.addEventListener('click', handleClick));

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  let result = '';
  if (player === computer) {
    result = `Draw: ${player} and ${computer}`;
  } else if (player === 'rock' && computer === 'scissors') {
    result = `You Win! Rock beats scissors`;
  } else if (player === 'paper' && computer === 'rock') {
    result = `You Win! Paper beats rocks`;
  } else if (player === 'scissors' && computer === 'paper') {
    result = `You Win! Scissors beats paper`;
  } else if (computer === 'rock' && player === 'scissors') {
    result = `You Lose! Rock beats scissors`;
  } else if (computer === 'paper' && player === 'rock') {
    result = `You Lose! Paper beats rocks`;
  } else if (computer === 'scissors' && player === 'paper') {
    result = `You Lose! Scissors beats paper`;
  }
  showResults(result);
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
