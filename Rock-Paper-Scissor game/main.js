// declaring the elements
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let result = document.querySelector("#display");

let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice");

let playerScore = document.querySelector("#player-score");
let playerScoreNum = 0;

let computerScore = document.querySelector("#computer-score");
let computerScoreNum = 0;

// randomizer for computer
function getComputerRandomChoice() {
  const choices = [rock.textContent, paper.textContent, scissor.textContent];
  const randomChoice = Math.floor(Math.random() * choices.length);

  if (choices[randomChoice] === rock.textContent) {
    let computerRock = computerChoice;
    computerRock.textContent = rock.textContent;
    computerRock.style.background = "red";
  } else if (choices[randomChoice] === paper.textContent) {
    computerChoice.textContent = paper.textContent;
    computerChoice.style.background = "blue";
  } else {
    computerChoice.textContent = scissor.textContent;
    computerChoice.style.background = "green";
  }
}

// player choice
const getPlayerChoice = (_value) => {
  if (_value === rock.textContent) {
    playerChoice.textContent = rock.textContent;
    playerChoice.style.background = "red";
  } else if (_value === paper.textContent) {
    playerChoice.textContent = paper.textContent;
    playerChoice.style.background = "blue";
  } else if (_value === scissor.textContent) {
    playerChoice.textContent = scissor.textContent;
    playerChoice.style.background = "green";
  }
};

// system logic
const gameLogic = () => {
  if (playerChoice.textContent === computerChoice.textContent) {
    result.textContent = "It's a tie";
  } else if (
    (playerChoice.textContent === rock.textContent &&
      computerChoice.textContent === scissor.textContent) ||
    (playerChoice.textContent === scissor.textContent &&
      computerChoice.textContent === paper.textContent) ||
    (playerChoice.textContent === paper.textContent &&
      computerChoice.textContent === rock.textContent)
  ) {
    display.textContent = "Player Win";
    playerScoreNum++;
    playerScore.textContent = playerScoreNum;
  } else {
    display.textContent = "Computer Win";
    computerScoreNum++;
    computerScore.textContent = computerScoreNum;
  }
};

// click functions
rock.addEventListener("click", () => {
  getPlayerChoice(rock.textContent);
  getComputerRandomChoice();
  gameLogic();
});
scissor.addEventListener("click", () => {
  getPlayerChoice(scissor.textContent);
  getComputerRandomChoice();
  gameLogic();
});
paper.addEventListener("click", () => {
  getPlayerChoice(paper.textContent);
  getComputerRandomChoice();
  gameLogic();
});
