const gamenumber = document.querySelector(".number");

const chebtn = document.querySelector(".btn.check");
let message = document.querySelector(".message");
let Score = document.querySelector(".label-score");
let showhighscore = document.querySelector(".label-highscore");

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
highscore = 0;

chebtn.addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    message.textContent = "No number!";
  } else if (guessNumber > 0) {
    if (guessNumber === secretNumber) {
      message.textContent = "Correct Number!";
      gamenumber.textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";

      if (score > highscore) {
        highscore = score;
        showhighscore.textContent = "highscore:" + highscore;
      }
    } else if (!guessNumber !== secretNumber) {
      if (score > 1) {
        if (guessNumber > secretNumber) {
          message.textContent = "Too high";
          score--;
          Score.textContent = "Score:" + score;
        } else {
          message.textContent = "Too Low";
          score--;
          Score.textContent = "Score:" + score;
        }
      }
    }
  }
});
const againbtn = document.querySelector(".btn.again");
againbtn.addEventListener("click", function () {
  message.textContent = "start guessing...";
  Score.textContent = "Score:" + 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".guess").value = "";
  gamenumber.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
});
