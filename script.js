"use strict";

let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let image = document.querySelector(".dice");
let active = document.querySelector(".player--active");

let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

let currentPlayer1 = document.getElementById("current-0");
let currentPlayer2 = document.getElementById("current-1");

image.classList.add("hidden");

let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
score0.textContent = 0;
score1.textContent = 0;

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  image.classList.remove("hidden");
  image.src = `dice/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    btnHold.style.pointerEvents = "none";
    btnRoll.style.pointerEvents = "none";
  } else {
    switchPlayer();
  }
});
