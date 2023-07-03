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
  switch (gameInput) {
    case 1:
      humanChoice = "Rock";
      if (pcChoiceNum < 4) {
        message1.innerHTML = "It's a draw!";
        pcChoice = "Rock";
      } else if (pcChoiceNum > 4 && pcChoiceNum < 7) {
        message1.innerHTML = "Papper defeats rock, you loose";
        pcChoice = "Papper";
        pcPoints++;
      } else if (pcChoiceNum > 6) {
        message1.innerHTML = "Rock defeats scissors, you win";
        pcChoice = "Scissors";
        humanPoints++;
      }
      break;
    case 2:
      humanChoice = "Papper";
      if (pcChoiceNum < 4) {
        message1.innerHTML = "Papper defeats rock, you win";
        pcChoice = "Rock";
        humanPoints++;
      } else if (pcChoiceNum > 4 && pcChoiceNum < 7) {
        message1.innerHTML = "It's a draw!";
        pcChoice = "Papper";
      } else if (pcChoiceNum > 6) {
        message1.innerHTML = "Scissors defeats papper, you loose";
        pcChoice = "Scissors";
        pcPoints++;
      }
      break;
    case 3:
      humanChoice = "Scissors";
      if (pcChoiceNum < 4) {
        message1.innerHTML = "Rock defeats scissors, you loose";
        pcChoice = "Rock";
        pcPoints++;
      } else if (pcChoiceNum > 4 && pcChoiceNum < 7) {
        message1.innerHTML = "Scissors defeats papper, you win";
        pcChoice = "Papper";
        humanPoints++;
      } else if (pcChoiceNum > 6) {
        message1.innerHTML = "It's a draw!";
        pcChoice = "Scissors";
      }
      break;
    default:
      throw new Error('There must be a problem');
  }
  pointTable.innerHTML = "Computer - " + pcPoints + " || Human - " + humanPoints;
  roundTable.innerHTML = "Round: " + round;
  message2.innerHTML = "PC " + pcChoice + " vs Person " + humanChoice;
  if (humanPoints > 1 || (isOneRound && humanPoints > 0)) {
  alert("You won in the " + round + " round using " + humanChoice + " against " + pcChoice + ". Congratulations my friend!");
  restartGame();
  } else if (pcPoints > 1 || (isOneRound && pcPoints > 0)) {
    alert("PC won in the " + round + " round using " + humanChoice + " against " + pcChoice + ". Better luck next time!");
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