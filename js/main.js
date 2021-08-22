const rockPaperScissor = ["Rock", "Paper", "Scissor"];

const playerMove = document.querySelectorAll(".rock-paper-scissor-img");

window.addEventListener("DOMContentLoaded", (event) => {
  playerMove.forEach((e1) => e1.addEventListener("click", rockPaper));
});
const botImage = document.querySelectorAll(".rock-paper-scissor-bot-img");
const playerImage = document.querySelectorAll(".rock-paper-scissor-img");

rockPaper = function (e) {
  var playerChoice = playerPlay(e);
  var computerChoice = computerPlay();
  if (playerChoice != computerChoice) {
    if (playerChoice == 0 && computerChoice == 2) {
      // everyRoundResult = document.querySelector(".winner-text");
      playerCurrentScore = Number(
        document.querySelector(".player-score-para").innerText
      );
      playerCurrentScore = playerCurrentScore + 1;
      document.querySelector(".player-score-para").innerText =
        playerCurrentScore;
      document.querySelector(".winner-text").style.visibility = "visible";
      document.querySelector(".winner-text").innerText =
        "You Win! " +
        rockPaperScissor[playerChoice] +
        " beats " +
        rockPaperScissor[computerChoice];
    } else if (playerChoice == 1 && computerChoice == 0) {
      playerCurrentScore = Number(
        document.querySelector(".player-score-para").innerText
      );
      playerCurrentScore = playerCurrentScore + 1;
      document.querySelector(".player-score-para").innerText =
        playerCurrentScore;
      document.querySelector(".winner-text").style.visibility = "visible";
      document.querySelector(".winner-text").innerText =
        "You Win! " +
        rockPaperScissor[playerChoice] +
        " beats " +
        rockPaperScissor[computerChoice];
    } else if (playerChoice == 2 && computerChoice == 1) {
      playerCurrentScore = Number(
        document.querySelector(".player-score-para").innerText
      );
      playerCurrentScore = playerCurrentScore + 1;
      document.querySelector(".player-score-para").innerText =
        playerCurrentScore;
      document.querySelector(".winner-text").style.visibility = "visible";
      document.querySelector(".winner-text").innerText =
        "You Win! " +
        rockPaperScissor[playerChoice] +
        " beats " +
        rockPaperScissor[computerChoice];
    } else {
      botCurrentScore = Number(
        document.querySelector(".bot-score-para").innerText
      );
      botCurrentScore = botCurrentScore + 1;
      document.querySelector(".bot-score-para").innerText = botCurrentScore;
      document.querySelector(".winner-text").style.visibility = "visible";
      document.querySelector(".winner-text").innerText =
        "You Lose! " +
        rockPaperScissor[computerChoice] +
        " beats " +
        rockPaperScissor[playerChoice];
    }
  } else {
    document.querySelector(".winner-text").innerText =
      "Draw! " +
      rockPaperScissor[computerChoice] +
      " equals " +
      rockPaperScissor[playerChoice];
  }
  playerCurrentScore = Number(
    document.querySelector(".player-score-para").innerText
  );
  botCurrentScore = Number(document.querySelector(".bot-score-para").innerText);

  if (playerCurrentScore == 5) {
    playWinnerSound();
    document.querySelector(".winner-text").style.visibility = "visible";
    document.querySelector(".winner-text").innerText =
      "Hurray, You Won the game!";
    playerMove.forEach((e1) => e1.removeEventListener("click", rockPaper));
    document.querySelector(".restart-game").style.visibility = "visible";
    confetti.start();
  } else if (botCurrentScore == 5) {
    playWinnerSound();
    document.querySelector(".winner-text").style.visibility = "visible";
    document.querySelector(".winner-text").innerText =
      "Sorry, You Lost the game!";
    playerMove.forEach((e1) => e1.removeEventListener("click", rockPaper));
    document.querySelector(".restart-game").style.visibility = "visible";
  }
};

function playPlayerSelection() {
  var audio = document.getElementById("audio_player");
  audio.play();
}
playerImage.forEach((e1) =>
  e1.addEventListener("click", (e) => {
    playPlayerSelection();
  })
);

function playBotSelection() {
  var audio = document.getElementById("audio_bot");
  audio.play();
}
botImage.forEach((e1) =>
  e1.addEventListener("click", (e) => {
    playBotSelection();
  })
);

function playWinnerSound() {
  var audio = document.getElementById("audio_winner");
  audio.play();
}

function playerPlay(e) {
  var playerChoice = e.target.getAttribute("player_choice");
  var computerChoice = computerPlay();
  const playerImageDiv = document.querySelector(".player-window");
  if (playerChoice == 0) {
    playerImageDiv.innerHTML =
      '<img src="img/Rock.jpg" style="width:150px;max-width:150px; height:150px; max-height: 150px; border-radius:50px;" alt="">';
  } else if (playerChoice == 1) {
    playerImageDiv.innerHTML =
      '<img src="img/Paper.jpg" style="width:150px;max-width:150px; height:150px; max-height: 150px; border-radius:50px;" alt="">';
  } else if (playerChoice == 2) {
    playerImageDiv.innerHTML =
      '<img src="img/Scissor.jpg" style="width:150px;max-width:150px; height:150px; max-height: 150px; border-radius:50px;" alt="">';
  }
  return playerChoice;
}

function computerPlay() {
  const options = ["Rock", "Paper", "Scissor"];
  var random_option = Math.floor(Math.random() * options.length);
  const botImageDiv = document.querySelector(".bot-window");
  if (random_option == 0) {
    botImageDiv.innerHTML =
      '<img src="img/Rock.jpg" style="width:150px;max-width:150px; height:150px; max-height: 150px; border-radius:50px;" alt="">';
  } else if (random_option == 1) {
    botImageDiv.innerHTML =
      '<img src="img/Paper.jpg" style="width:150px;max-width:150px; height:150px; max-height: 150px; border-radius:50px;" alt="">';
  } else if (random_option == 2) {
    botImageDiv.innerHTML =
      '<img src="img/Scissor.jpg" style="width:150px;max-width:150px; height:150px; max-height: 150px; border-radius:50px;" alt="">';
  }
  return random_option;
}
