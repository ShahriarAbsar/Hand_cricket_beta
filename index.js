const computer = document.querySelector(".computer img");
      const player = document.querySelector(".player img");
      const computerPoints = document.querySelector(".computerPoints");
      const playerPoints = document.querySelector(".playerPoints");
      const options = document.querySelectorAll(".options button");

      let totalScore = 0;

      // Loop through each option button and add a click event listener to it
      options.forEach((option) => {
        option.addEventListener("click", () => {
          // Add the shake animation classes to the computer and player images
          computer.classList.add("shakeComputer");
          player.classList.add("shakePlayer");

          // Wait 900 milliseconds (the duration of the shake animation)
          setTimeout(() => {
            // Remove the shake animation classes from the computer and player images
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");
            
            // Set the player's image source based on the option they chose
            console.log(option.innerHTML);
            player.src = "./" + option.innerHTML + "player.png";

            // Generate a random choice for the computer
            const choice = ["1", "2", "3", "4", "5", "6"];
            const computerChoice = choice[Math.floor(Math.random() * choice.length)];
            computer.src = "./" + computerChoice + "computer.png";
            if (option.innerHTML === computerChoice) {
                gameOver();}
            // Add the player's choice to their total score
            totalScore += parseInt(option.innerHTML);
            playerPoints.innerHTML = totalScore;

            
            

            function gameOver() {
                alert("out");
                }



          }, 900);
        });
      });