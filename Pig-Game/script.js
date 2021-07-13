'use strict';



// set selectors
const rollDice = document.querySelector('.btn--roll')
const newGame = document.querySelector('.btn--new')
const dice = document.querySelector('.dice')
const hold = document.querySelector('.btn--hold')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

//set element selectors 
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')

let scores, currentScore, activePlayer, playing

//set starting conditions for app.
function init(){
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');

  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player0.classList.remove('player--winner')
  player0.classList.add('player--active')
  player1.classList.remove('player--winner')
  player1.classList.remove('player--active')
  current0.textContent = 0
  current1.textContent = 0
};

init();
//functions
// set either player or both players scores to zero
function currZero(player){
    if(player === 'both'){
        current0.textContent = 0;
        current1.textContent = 0;
    }else{
        document.getElementById(`current--${player}`).textContent = 0;
    }
}

//swap active player.
function switchActivePlayer(){
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
}



// dice roll event handler
rollDice.addEventListener('click', function(){
    if(playing){
      // roll the dice and show the dice on screen
      let diceRoll = Math.trunc(Math.random() * 6) + 1
      dice.classList.remove('hidden');
      dice.src = `dice-${diceRoll}.png`
      // set conditions for if a non 1 is rolled.
      if(diceRoll !== 1){
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
      // zero out current score and swap players.
      }else{
          currZero(activePlayer)
          currentScore = 0
          switchActivePlayer()
      

      }
    }  

  })

// new game event handler
newGame.addEventListener('click', function(){
    init()
})

// hold button event handler
hold.addEventListener('click', function(){
    if(playing){
      if(scores[activePlayer] < 20){
        // add current score to player score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        // zero out current score as well as current score field and then swap players
        currZero(activePlayer)
        switchActivePlayer()
        currentScore = 0
      } else {
          // set win condition. remove dice and set active player class as winner.
          // set playing to false to stop button presses that are not "new game"
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
          dice.classList.add('hidden')
          playing = false
      }
    }  
  })

