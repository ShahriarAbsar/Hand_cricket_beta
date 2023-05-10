// Get necessary elements from the HTML document
const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const winner = document.querySelector(".winner");

const playerInput = parseInt(document.querySelectorAll(".options button"));
const computerInput = Math.floor(Math.random() * 6) + 1;
const sum = playerInput + computerInput;

// Initialize game variables
let totalScore = 0;
let computerScore = 0;
let isPlayerPlaying = true;


        function playerChoice(choice) {
            player = choice;
            document.getElementById('result').innerHTML = `Player chose ${player}`;
        }
        function toss() {
            if(player === '') {
                document.getElementById('result').innerHTML = 'Please select Head or Tail';
                return;
            }
            const options = ["Head", "Tail"];
            const result = options[Math.floor(Math.random() * options.length)];
            document.getElementById('result').innerHTML += ` Toss result: ${result}`;
            if(player === result) {
                document.getElementById('result').innerHTML += '. Player wins!';
            } else {
                document.getElementById('result').innerHTML += '. Computer wins!';
            }
        }



// Loop through each option button and attach a click event listener
options.forEach((option) => {
  option.addEventListener("click", () => {
    // Add shake animation to computer and player images
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    // Wait 900ms before executing the rest of the code
    setTimeout(() => {

      // Remove shake animation from computer and player images
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      if (isPlayerPlaying) {
        // If it's the player's turn, update the player image to the chosen option
        player.src = "./" + option.innerHTML + "player.png";

        // Choose a random option for the computer
        const choice = ["1", "2", "3", "4", "5", "6"];
        const computerChoice = choice[Math.floor(Math.random() * choice.length)];
        computer.src = "./" + computerChoice + "computer.png";

        // Check if the player's option matches the computer's option
        if (option.innerHTML === computerChoice) {
          alert("You're out!");
          isPlayerPlaying = false;
          isComputerPlaying = true;
          return;
        }

        // Update the player's total score and display it on the page
        totalScore += parseInt(option.innerHTML);
        playerPoints.innerHTML = totalScore;
      } else {
        // If it's the computer's turn, choose a random option for the computer
        const choice = ["1", "2", "3", "4", "5", "6"];
        const computerChoice = choice[Math.floor(Math.random() * choice.length)];
        computer.src = "./" + computerChoice + "computer.png";

        // Check if the computer's option matches the player's option
        if (option.innerHTML === computerChoice) {
          alert("Computer is out!");
          isComputerPlaying = true;
          isPlayerPlaying = true;
          computerScore = 0;
          computerPoints.innerHTML = computerScore;
          return;
        }

        // Update the computer's total score and display it on the page
        computerScore += parseInt(computerChoice);
        computerPoints.innerHTML = computerScore;
      }

      // Check if both players are out and determine the winner
      if (!isPlayerPlaying) {
        if (totalScore > computerScore) {
          winner.innerHTML = "Player wins!";
        } else if (computerScore > totalScore) {
          winner.innerHTML = "Computer wins!";
        } 
      }

      
      

    }, 800);

    
  });
});