'use strict';
const diceEl=document.querySelector('.dice');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const currentscore0El=document.getElementById('current--0');
const currentscore1El=document.getElementById('current--1');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const btnnew=document.querySelector('.btn--new');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

let currentScore, activePlayer,playing,score;
const init=function(){
     currentScore=0;
     activePlayer=0;
     playing=true;
     score=[0,0];
    score1El.textContent=0;
    score0El.textContent=0;
    currentscore0El.textContent=0;
    currentscore1El.textContent=0;
    diceEl.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

};
init();
const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer= activePlayer==0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

btnroll.addEventListener('click',function(){
    if(playing){
    const diceno=Math.trunc(Math.random()*6)+1;
    console.log(diceno);
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${diceno}.png`;
    if(diceno!=1){
        currentScore+=diceno;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
        switchPlayer();
    }
    }
})
btnhold.addEventListener('click',function(){
    if(playing){
    //1. add current score to score 
        score[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
       
    //2.if >=100 player wins
    if(score[activePlayer]>=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
        playing=false;
    }
    else{
        switchPlayer();
    }
}
});
btnnew.addEventListener('click',init)