"use strict";

const checkButton = document.querySelector(".check__button"),
  valueInput = document.querySelector(".check__number"),
  resultNumber = document.querySelector(".result__number"),
  message = document.querySelector(".text");

const refreshButton = document.querySelector(".refresh");

const animateText = document.querySelector(".text-animation");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let currentScore = document.querySelector(".points__score-num");
let highScore = document.querySelector(".points__highscore-num");

///FUNCTIONS

function loseGame() {
  valueInput.disabled = "true";
  message.textContent = "Play again!";
  currentScore.textContent = 0;
  document.querySelector("body").classList.toggle("background-lose");
  resultNumber.style.color = "hsl(0deg 89% 52%)";
  message.style.color = "hsl(0deg 89% 52%)";
  message.style.backgroundColor = "rgb(27, 27, 27)";
  checkButton.disabled = "true";
  valueInput.value = "";
}

function countReducer() {
  counter--;
  currentScore.textContent = counter;
  valueInput.value = "";
  message.classList.add("text-animation");
  message.style.display = "block";
}

let counter = 20;
////

//// CHECK NUMBER BUTTON
checkButton.addEventListener("click", function () {
  const guessed = Number(valueInput.value);

  if (!guessed) {
    message.textContent = "Enter a number!";
    message.classList.add("text-animation");
    message.style.display = "block";

    valueInput.value = "";
  } else if (guessed === secretNumber) {
    message.textContent = "Congratulations!";
    message.classList.add("text-animation");
    message.style.display = "block";
    message.style.color = "hsl(123deg 100% 44%)";
    valueInput.disabled = "true";
    highScore.textContent = counter;
    resultNumber.textContent = secretNumber;
    document.querySelector("body").classList.toggle("background-win");
    resultNumber.style.color = "hsl(123deg 100% 44%)";

    checkButton.disabled = "true";
  } else if (guessed < secretNumber) {
    if (counter > 1) {
      message.textContent = "Higher!";

      countReducer();
    } else {
      loseGame();
    }
  } else if (guessed > secretNumber) {
    if (counter > 1) {
      message.textContent = "Lower!";

      countReducer();
    } else {
      loseGame();
    }
  }
  setTimeout(() => {
    message.classList.remove("text-animation");
  }, 1000);
  valueInput.focus();
  valueInput.select();
});

///KEYPRESS

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkButton.click();
  } else if (event.key === "Escape") {
    refreshButton.click();
  }
});

////REFRESH BUTTON

refreshButton.addEventListener("click", function () {
  message.style.display = "none";
  valueInput.value = "";
  resultNumber.textContent = "?";
  valueInput.disabled = "";
  checkButton.disabled = "";
  counter = 20;
  currentScore.textContent = counter;
  document.querySelector("body").classList.remove("background-win");
  document.querySelector("body").classList.remove("background-lose");
  message.style.color = "rgb(229, 224, 145)";
  secretNumber = Math.floor(Math.random() * 100) + 1;
  resultNumber.style.color = "rgb(229, 224, 145)";
  if (Number(highScore.textContent) < Number(highScore.textContent)) {
    highScore.textContent = highScore.textContent;
  }
});

console.log(highScore.textContent);
