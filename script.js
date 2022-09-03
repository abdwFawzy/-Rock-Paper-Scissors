
   // step 3 - randomly return R/P/S 

   let choices = ['Rock', 'Paper', 'Scissors'];

    function computerPlay () {
      let result = choices[Math.floor(Math.random() * choices.length - 1)];
      return result;
    }

    // step 4 - function that plays 1 round R/P/S, and returns string


       

    let playerScore = 0;
    let compScore = 0;
  

   
   
  const btns = document.querySelector('div');
  let playerSelection = btns.addEventListener('click', event => {
    console.dir(event.target)
    playerSelection = event.target.className;
    game()
});
  let p = document.createElement('p');
  let main = document.querySelector('main');
  main.appendChild(p);
  function playRound () 
  {
      
      
    let computerSelection = computerPlay();

    
    if (playerSelection.toLowerCase() == "Rock".toLowerCase()) {
        if (computerSelection === "Scissors") {
          playerScore++

         
          p.textContent = "You win! Rock beats Scissors." ; 
          
        }else if(computerSelection === "Paper"){
            compScore++
  
           
            p.textContent = "You lose! Paper beats rock."; 
          
        }else {
          p.textContent = "Tie!"
          
        }
    }
     else if (playerSelection.toLowerCase() === "Paper".toLowerCase()) {
      if (computerSelection == "Scissors") {
            compScore++
  
           
          p.textContent = "You lose! Scissors beats Paper!";
        }else if (computerSelection == "Rock") {
            playerScore++
  
           
           p.textContent = "You win! Paper beats Rock!";
        }else if(computerSelection === "Paper"){
          p.textContent = "Tie!";
        }
    }
    else if(playerSelection.toLowerCase() === "Scissors".toLowerCase()) {
      if (computerSelection === "Rock") {
            compScore++
  
           
          p.textContent = "You lose! Rock beats Scissors!";
        }else if (computerSelection === "Paper") {
            playerScore++
  
           
          p.textContent = "You win! Scissors beats Paper!";
        }else {
          p.textContent = "Tie!"
        }
    }
    else{
      p.textContent = ''
    }
  }
let count = 0;
let doc_count = document.createElement('h1');
main.appendChild(doc_count)
   function game() {
    count++;
    doc_count.textContent = count;
    if (count > 4){
      if (playerScore > compScore) {
        compScore = 0;
          playerScore = 0;

         
          count = 0;
          doc_count.textContent = count;
           p.textContent ="You Win the game!!!!";
          
      }else if (playerScore < compScore) {
        compScore = 0;
          playerScore = 0;

         
          count = 0;
          doc_count.textContent = count;
          p.textContent ="You Lost the game to a computer!";
      }else {
        compScore = 0;
          playerScore = 0;

         
          count = 0;
          doc_count.textContent = count;
          p.textContent ="It's a Draw!";
      }
    }
    else{
       console.log ( playRound()); 
    }
   
  }

