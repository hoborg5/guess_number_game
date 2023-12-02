"use strict";

function decreaseScore() {
  if (score > 0) {
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (score === 0) {
    document.querySelector(".label-message").textContent = "Game over";
  }
}

function messageDisplay(message) {
  document.querySelector(".label-message").textContent = message;
}

function numberDrawing() {
  return Math.floor(Math.random() * 20) + 1;
}

let score = 20;
let highScore = 0;
let secret_number = numberDrawing();
console.log(secret_number);

document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const input_number = Number(document.querySelector(".guess").value);
  if (secret_number === input_number) {
    messageDisplay("🎊Correct!🎊");
    document.getElementsByClassName(".check").disabled = true;
    document.body.style.backgroundColor = "blue";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (score > 1) {
    messageDisplay(secret_number > input_number ? "To low..." : "To high...");
    decreaseScore();
  }

  document.querySelector(".again-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    score = 20;
    document.querySelector(".score").textContent = score;
    secret_number = numberDrawing();
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".guess").value = ""
    messageDisplay("");
  });
});
