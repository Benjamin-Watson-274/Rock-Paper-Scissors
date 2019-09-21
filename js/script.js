function game() {
    let roundCounter = 1;
    let winCounter = 0;
    let loseCounter = 0;
  
    function playerPlay() {
      const PLAYER_PROMPT = "Please enter either Rock, Paper or Scissors:";
      let selection = prompt(PLAYER_PROMPT).toLowerCase();
      if (
        selection === "rock" ||
        selection === "paper" ||
        selection === "scissors"
      ) {
        return selection;
      } else {
        console.log(`"${selection}" is not a valid choice.`);
        return playerPlay();
      }
    }
  
    function computerPlay() {
      // Returns a random number between 1 and 3 for computer choice.
      const choice = Math.floor(Math.random() * 3);
      switch (choice) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
      }
    }
  
    function determineOutcome(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "draw";
      }
      switch (playerSelection) {
        case "rock":
          return computerSelection === "scissors" ? "win" : "lose";
        case "paper":
          return computerSelection === "rock" ? "win" : "lose";
        case "scissors":
          return computerSelection === "paper" ? "win" : "lose";
      }
    }
  
    function playRound(playerSelection, computerSelection) {
      console.log(`The player has chosen ${playerSelection}.`);
      console.log(`The computer has chosen ${computerSelection}.`);
  
      result = determineOutcome(playerSelection, computerSelection);
  
      switch (result) {
        case "win":
          console.log(`The player has won round ${roundCounter}!`);
          console.log(""); // For readability in console.
          winCounter++;
          if (winCounter === 3) {
            console.log("The player has won the Game!");
          } else {
            roundCounter++;
            playRound(playerPlay(), computerPlay());
          }
          break;
        case "lose":
          console.log(`The player has lost round ${roundCounter}!`);
          console.log(""); // For readability in console.
          loseCounter++;
          if (loseCounter === 3) {
            console.log("The player has lost the Game!");
          } else {
            roundCounter++;
            playRound(playerPlay(), computerPlay());
          }
          break;
        case "draw":
          console.log("Draw! Try again!");
          console.log(""); // For readability in console.
          playRound(playerPlay(), computerPlay());
          break;
      }
    }
  
    playRound(playerPlay(), computerPlay());
  }
  
  game();