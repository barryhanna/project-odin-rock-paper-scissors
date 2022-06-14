const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  console.log(`${player} v ${computer}`);
  if (player === computer) {
    return `Draw: ${player} and ${computer}`;
  } else if (player === 'rock' && computer === 'scissors') {
    return `You Win! Rock beats scissors`;
  } else if (player === 'paper' && computer === 'rock') {
    return `You Win! Paper beats rocks`;
  } else if (player === 'scissors' && computer === 'paper') {
    return `You Win! Scissors beats paper`;
  } else if (computer === 'rock' && player === 'scissors') {
    return `You Lose! Rock beats scissors`;
  } else if (computer === 'paper' && player === 'rock') {
    return `You Lose! Paper beats rocks`;
  } else if (computer === 'scissors' && player === 'paper') {
    return `You Lose! Scissors beats paper`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const player = prompt('Your selection? [Rock, Paper, Scissors]');
    const result = playRound(player, computerPlay());
    console.log(result);
    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lost! ${playerScore} - ${computerScore}`);
  } else {
    console.log('Draw');
  }
}

game();
