'use strict';

const roll_btn = document.querySelector(".btn.btn--roll"); 
const hold_btn = document.querySelector(".btn.btn--hold"); 
const newGame_btn = document.querySelector(".btn.btn--new"); 


const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");

const player1 = document.querySelector(".player.player--0");
const player2 = document.querySelector(".player.player--1");

const current1 = document.getElementById("current--0");
const current2 = document.getElementById("current--1");

let dice_photo = document.querySelector(".dice");

const init = function(){
    current1.textContent = 0;
    current2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    dice_photo.classList.add("hidden");
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
      roll_btn.disabled = false;
      hold_btn.disabled = false;
}
init();
let current_score =0;
roll_btn.addEventListener("click", function(){
        let dice_num = Math.floor(Math.random()*6)+1;
        dice_photo.src = `dice-${dice_num}.png`;
         dice_photo.classList.remove("hidden");


         if(player1.classList.contains("player--active")){
        if(dice_num==1){
          player1.classList.toggle("player--active");
          player2.classList.toggle("player--active");
          current_score=0;
        }
        else{
        current_score+=dice_num;
        }
        current1.textContent = current_score;
    }
    else {
         if(dice_num==1){
          player1.classList.toggle("player--active");
          player2.classList.toggle("player--active");
          current_score=0;
        }
        else{
        current_score+=dice_num;
        }
        current2.textContent = current_score;
    }
})

hold_btn.addEventListener("click",function(){
    if(player1.classList.contains("player--active")){
        score1.textContent = Number(current1.textContent)+Number(score1.textContent);

        current1.textContent = 0;
        current_score = 0;
    } 
    else {
     score2.textContent = Number(current2.textContent)+Number(score2.textContent);    
        current2.textContent = 0;
        current_score = 0;
    }

    if(Number(score1.textContent)>=100) {
       player1.classList.add("player--winner");
       player1.classList.remove("player--active");
       dice_photo.classList.add("hidden");
       roll_btn.disabled = true;
       hold_btn.disabled = true;
    }
    else if(Number(score2.textContent)>=100) {
       player2.classList.add("player--winner");
       player2.classList.remove("player--active");
       dice_photo.classList.add("hidden");
       roll_btn.disabled = true;
       hold_btn.disabled = true;
    }
   else{
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    }
})

newGame_btn.addEventListener("click",init);