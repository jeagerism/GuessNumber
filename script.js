"use strict";

let random_number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log("your guess is ", typeof guess, guess);
  if (!guess) {
    displayMessage("no have anything 🤣");
  }
  // correct !
  else if (guess === random_number) {
    let number = Number(
      (document.querySelector(".number").textContent = random_number)
    );
    console.log("random number is ", random_number, typeof random_number);
    displayMessage("correct 😘");
    document.querySelector("body").style.backgroundColor = "#60b347";
    //set hight score

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // not true ! score --
  else if (guess !== random_number) {
    if (score > 1) {
      if (guess > random_number) {
        displayMessage("your number more than random");
      } else {
        displayMessage("your number less than random");
      }
      //สกอร์ลดเรื่อยๆแค่กรณีที่ยังไม่ถูก
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you loss");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = false;
  random_number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
});
