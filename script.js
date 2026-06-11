function getComputerChoice() {
  let randomVal = Math.random();

  if (randomVal <= 0.33) {
    return "rock";
  } else if (randomVal > 0.33 && randomVal <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let roundMessage = "";
    if (humanChoice === computerChoice) {
      roundMessage = "Tie! Yall read eachother minds! No points Given.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      roundMessage = "You Win rock beats Scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      roundMessage = "You Win scissors beats paper!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      roundMessage = "You Lose! scissors beats paper!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      roundMessage = "You Lose! rock beats scissors!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      roundMessage = "You Lose! Paper Beats Rock,";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      roundMessage = "You Win! Paper beats rock!";
    }
    return (
      roundMessage +
      " (Score: Human:" +
      humanScore +
      ", Computer: " +
      computerScore +
      ")"
    );
  }

  const btn = document.querySelectorAll("button");
  const results = document.querySelector("#Results");
  const lineBreak = document.createElement("br");

  btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      //could also be written as button.addEventListener("click", function(event) { ... }) oe button.addEventListener ("click", function () { ... })

      if (humanScore < 5 && computerScore < 5) {
        const humanChoice = event.target.id; //event.target is the button that was clicked and id is the id of that button
        const computerChoice = getComputerChoice();
        const roundMessage = playRound(humanChoice, computerChoice);

        results.innerHTML += roundMessage + "<br>"; //updates the text content of the results div with the result message from playRound function
        // results.appendChild(lineBreak);

        if (humanScore === 5 || computerScore === 5) {
          const resultMessage = theWinner(humanScore, computerScore);
          results.innerHTML += resultMessage + "<br>";
        }
      }
    });
  });

  function theWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      return "The Human Wins!";
    } else if (computerScore > humanScore) {
      return "The computer Wins!";
    } else if (humanScore === computerScore) {
      return "You guys Tied!";
    }
  }

  // two ways to call the overall winner
  theWinner(humanScore, computerScore);

  // console.log( "The winner is " + (humanScore > computerScore ? "Human" : "Computer") ); // Ternary operator to determine winner.
  // ? means is this true; then print Human and the ( : ) means else print computer
}
playGame();
