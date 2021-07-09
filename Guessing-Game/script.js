'use strict';


// Basic DOM manipulation examples
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number Yay!'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)


// click events

let number = Math.trunc(Math.random()*20) + 1
let score = 20;
let highscore = 0;



function displayMessage(message){
    document.querySelector('.message').textContent = message
}

// handler for number check    
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    console.log(typeof(guess))

    //0 or no imput
    if(!guess) {
        displayMessage("No mumber between 1 and 20- entered")
     
      // Player wins
    } else if (guess === number){
        displayMessage("Correct Number!!")
        document.querySelector('.number').textContent = number
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
         //Player guesses wrong or score hits 0
        } else if ( guess !== number){
            if (score > 1){
              displayMessage(guess > number ? 'Too High!' : 'Too Low!')
              score--
            }else{
              document.querySelector('.message').textContent = 'You lost the game! =(';
              document.querySelector('.score').textContent = 0;
              document.querySelector('body').style.backgroundColor = '#ff0000';
              document.querySelector('h1').textContent = 'Game Over!!';
              document.querySelector('.number').textContent = '=(';

            }
        }    
    }
});


//handler for the Again button 
document.querySelector('.again').addEventListener('click', function() {
    number = Math.trunc(Math.random()*20) + 1
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage("Start Guessing...")
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('h1').textContent = 'Guess My Number!';




})


