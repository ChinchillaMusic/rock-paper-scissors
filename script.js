/* Variables inside JS */
let pcPoints = 0;
let humanPoints = 0;
let round = 0;
let pcChoice = "X";
let humanChoice = "X";
let isOneRound = null;
/* Elements from HTML */
const button1 = document.getElementById('round1-button');
const button2 = document.getElementById('round3-button');
const button1Container = document.getElementById('round1-div');
const button2Container = document.getElementById('round3-div');
const rockContainer = document.getElementById('rock-div');
const papperContainer = document.getElementById('papper-div');
const scissorsContainer = document.getElementById('scissors-div');
const rock = document.getElementById('rock-button');
const papper = document.getElementById('papper-button');
const scissors = document.getElementById('scissors-button');
const pointTable = document.getElementById('points-table');
const roundTable = document.getElementById('round-count');
const message1 = document.getElementById('what-happened1');
const message2 = document.getElementById('what-happened2');
pointTable.innerHTML = "Computer - " + pcPoints + " || Human - " + humanPoints;
roundTable.innerHTML = "Round: " + round;
message1.innerHTML = "Let's go!";
message2.innerHTML = "PC " + pcChoice + " vs Person " + humanChoice;
rockContainer.classList.add('d-none');
papperContainer.classList.add('d-none');
scissorsContainer.classList.add('d-none');
/* Round Selection */
let roundSelector = (roundInput) => {
  isOneRound = roundInput;
  button1Container.classList.add('d-none');
  button2Container.classList.add('d-none');
  rockContainer.classList.remove('d-none');
  papperContainer.classList.remove('d-none');
  scissorsContainer.classList.remove('d-none');
  return isOneRound;
}
/* Game */
let rockPapperScissors = (gameInput) => {
  round++;
  let pcChoiceNum = Math.floor(Math.random() * 9.99);
  let gameChoices = ['Rock', 'Papper', 'Scissors'];
  let winConditions = {
    'Rock': { win: 'Scissors', lose: 'Papper' },
    'Papper': { win: 'Rock', lose: 'Scissors' },
    'Scissors': { win: 'Papper', lose: 'Rock' },
  };
  humanChoice = gameChoices[gameInput - 1];
  pcChoice = gameChoices[Math.floor(pcChoiceNum / 3.33)];
  if (pcChoice === humanChoice) {
    message1.innerHTML = "It's a draw!";
  } else if (winConditions[humanChoice].win === pcChoice) {
    message1.innerHTML = `${humanChoice} defeats ${pcChoice}, you win`;
    humanPoints++;
  } else {
    message1.innerHTML = `${pcChoice} defeats ${humanChoice}, you loose`;
    pcPoints++;
  }
  pointTable.innerHTML = "Computer - " + pcPoints + " || Human - " + humanPoints;
  roundTable.innerHTML = "Round: " + round;
  message2.innerHTML = "PC " + pcChoice + " vs Person " + humanChoice;
  if ((isOneRound && (humanPoints > 0 || pcPoints > 0)) || humanPoints > 1 || pcPoints > 1) {
    let winner = humanPoints > pcPoints ? "You" : "PC";
    alert(`${winner} won in the ${round} round using ${humanChoice} against ${pcChoice}. ${winner === 'You' ? 'Congratulations my friend!' : 'Better luck next time!'}`);
    restartGame();
  }
}
/* Restart */
let restartGame = () => {
  button1Container.classList.remove('d-none');
  button2Container.classList.remove('d-none');
  rockContainer.classList.add('d-none');
  papperContainer.classList.add('d-none');
  scissorsContainer.classList.add('d-none');
  pcPoints = 0;
  humanPoints = 0;
  round = 0;
  pcChoice = 'X';
  humanChoice = 'X';
  message1.innerHTML = "Let's play again!"
  pointTable.innerHTML = "Computer - " + pcPoints + " || Human - " + humanPoints;
  roundTable.innerHTML = "Round: " + round;
  message2.innerHTML = "PC " + pcChoice + " vs Person " + humanChoice;
  return;
}
/* Interactions */
button1.onclick = function () { roundSelector(true); };
button2.onclick = function () { roundSelector(false); };
rock.onclick = function () { rockPapperScissors(1); };
papper.onclick = function () { rockPapperScissors(2); };
scissors.onclick = function () { rockPapperScissors(3); };