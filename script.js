
   // step 3 - randomly return R/P/S 

   let choices = ['Rock', 'Paper', 'Scissors'];

    function computerPlay() {
      let result = choices[Math.floor(Math.random() * choices.length)];
      if(!result)
      {
        result = 'Paper';
      }
      return result;
    }

  

    let playerLives = 5;
    let computerLives = 5;
    let round = 0;
     
   
  const btns = document.querySelectorAll('.weabon');
  let playerSelection = btns.forEach(btn => {
    btn.addEventListener('click', event => {
      playerSelection = event.target.textContent;
      game();
    });
  });
    

  let combatText = document.createElement('p');
  let main = document.querySelector('main');
  main.appendChild(combatText);
  function playRound(playerSelection, computerSelection)
  { 
    round++;
    switch (true) {
      
      case (playerSelection === computerSelection):
        combatText.innerText = `Hmm.. Two ${playerSelection}s means a draw, so no lives were lost. Let's try again.`;
        break;
      case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
      case (playerSelection === 'Paper' && computerSelection === 'Rock'):
      case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
        combatText.textContent = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
        computerLives -= 1;
        break;
      default:
        combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
        playerLives -= 1;
        break;
    }
  }
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';

let count = 0;
let roundCount = document.createElement('h2');
let d_playerLives = document.createElement('h2');
let d_computerLives = document.createElement('h2');
const score = document.querySelector('.score');

score.appendChild(d_playerLives)
score.appendChild(d_computerLives)
main.appendChild(roundCount)
function game() {
      playRound(playerSelection, computerPlay());
      roundCount.textContent = `Rounds: ${round}`;
      d_playerLives.textContent = `your score ${playerLives}`;
      d_computerLives.textContent = `AI score ${computerLives}`;
      if (checkGame(playerLives, computerLives)) {
          main.appendChild(resetBtn)
            resetBtn.addEventListener('click', e => {         
            resetGame();
          })
      }
      
      
        
      
      
}

function checkGame(playerLives, computerLives)
{
  const wining = "you have secured Your job";
  const losing = "You have lost Your job";
  if (playerLives == 0) {
    btns.forEach( (btn) => {
      btn.disabled = true;
    }); 
    combatText.textContent = losing;
    return losing;
  }
  else if (computerLives == 0){
    btns.forEach((btn) => {
      btn.disabled = true;
    }); 
    combatText.textContent = wining;
    return wining;
  }
}
function resetGame(){
  return window.location.reload()
}
