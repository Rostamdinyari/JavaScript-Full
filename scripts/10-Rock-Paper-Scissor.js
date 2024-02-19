const score = JSON.parse(localStorage.getItem('score'));

    console.log(JSON.parse(localStorage.getItem('score')));
    updateScoreElement();

    function playGame(playerMove){
      if(playerMove === 'Scissors'){
          if(computerMove === 'Rock'){
            result = 'You lose!';
          }
          else if(computerMove === 'Paper'){
            result = 'You win!' ;
          }
          else if( computerMove === 'Scissors'){
            result = 'Tie.';
        }
      } else if(playerMove === 'paper'){
          if(computerMove === 'Rock'){
            result = 'You win!';
          }
          else if(computerMove === 'Paper'){
            result = 'Tie.' ;
          }
          else if( computerMove === 'Scissors'){
            result = 'You lose!';
          }
      } else if(playerMove === 'Rock'){
          if(computerMove === 'Rock'){
            result = 'Tie.';
          }
          else if(computerMove === 'Paper'){
            result = 'You lose!' ;
          }
          else if( computerMove === 'Scissors'){
            result = 'You win!';
          }
      }  
      
      if(result === 'You win!'){
        score.wins += 1;
      } else if(result === 'You lose!'){
        score.loses += 1;
      } else if(result === 'Tie.'){
        score.ties += 1
      }

      localStorage.setItem('score', JSON.stringify(score));

      
      updateScoreElement();

      document.querySelector('.js-result').innerHTML = `${result}`;

      document.querySelector('.js-moves').innerHTML = `you <img src = "images/${playerMove}-emoji.png" class = "move-icon"> <img src= "images/${computerMove}-emoji.png" class = "move-icon">computer.`;


      /*document.querySelector('.js-moves').innerHTML = `you: ${playerMove}.  ${computerMove} computer`; */

/*
      alert(`You picked ${playerMove}. computer pick ${computerMove}. ${result} \n Win score: ${score.wins}, lose score: ${score.loses}, Tie score: ${score.ties}`  );     
*/       
    }
    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `Win score: ${score.wins}, lose score: ${score.loses}, Tie score: ${score.ties}`
    }  
    /***********************/
    function pickComputerMove(){
      randomNumber = Math.random();
      let computerMove = '';
      let result = '';

      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
      }
      else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
      }
      console.log(computerMove)
      return(computerMove);
    }