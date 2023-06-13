"use strict";

function decreaseScore() {
  if (score > 0) {
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (score === 0) {
    document.querySelector(".label-message").textContent = "Game over";
  }
}

function messageDisplay(message){
    document.querySelector(".label-message").textContent = message
}

let score = 20;
const secret_number = Math.floor(Math.random() * 20) + 1;
console.log(secret_number);

document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const input_number = Number(document.querySelector(".guess").value);
  if (secret_number === input_number) {
    messageDisplay("🎊Correct!🎊");
    document.getElementsByClassName(".check").disabled = true;
  }
  else if (score > 1){
    messageDisplay(secret_number > input_number ?  "To low..." : "To high...");
    decreaseScore();
  }  
});
