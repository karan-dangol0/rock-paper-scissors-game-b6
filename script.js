document.addEventListener('DOMContentLoaded', () => {
    let computerChoiceText = document.querySelector('.computer-choice');
    let userChoiceText = document.querySelector('.user-choice');
    let buttons = document.querySelectorAll('button');
    let resultText = document.querySelector('.result');
    let scoreText  = document.querySelector('.score-text');
    let totalGamesPlayed = 0;
    let userWins = 0;
    console.log(scoreText);
    
    
    function randomNumber() {
        return Math.floor(Math.random() * 3) ;
    };

    buttons.forEach(button => {
       button.addEventListener('click', () => {
        totalGamesPlayed++;
          let choices = ['rock', 'paper', 'scissors']; 
          choices.sort(() => Math.random() - 0.5);
         let userChoice  = button.classList[0];
        let computerChoice = choices[randomNumber()];
        userChoiceText.textContent = userChoice;
        computerChoiceText.textContent  =  computerChoice; 

        if(userChoice === computerChoice) {
            resultText.textContent = 'draw! 😬';
        } else if (
            (userChoice  === 'rock' && computerChoice === 'scissors') ||
            (userChoice  === 'paper' && computerChoice === 'rock')  ||
             (userChoice  === 'scissors' && computerChoice === 'paper')
            
        ){
            userWins++;
            resultText.textContent = 'You won! 🥳'
        } else {
            resultText.textContent = 'Bot wins! You are worse than bot 🤖🗑️'
        }

        scoreText.textContent = `You Won ${userWins}. Total Games played: ${totalGamesPlayed}`;
 
      }) 
    });
})