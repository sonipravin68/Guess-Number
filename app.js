const secretNumber = Math.floor(Math.random() * 20 + 1);
const check = document.querySelector(".check");

// console.log(highscore);

const displayMessege = (messege) => {
  document.querySelector(".message").textContent = messege;
};

let score = 20;
check.addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessege("😶No Number entered");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".message").textContent = "🤩 correct number";
    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".highscore").textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessege(guess > secretNumber ? "📈 too high" : "📉 too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😐 You lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  }

  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😐 You lost the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😐 You lost the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
const btn = document.querySelector(".again");

btn.addEventListener("click", function () {
  score = 20;
  const secretNumber = Math.floor(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(8, 8, 8)";
});
