let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".chioce");
const msg = document.querySelector("#msg");
const usescp = document.querySelector("#user-sco");
const computerscore = document.querySelector("#com-sco");

const gencomchioce = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const showWinner = (userwin, userchioce, comchioce) => {
  if (userwin) {
    userScore++;
    usescp.innerText = userScore;

    msg.innerText = `you win,${userchioce} beats ${comchioce}`;
    msg.style.backgroundColor = "blue";
  } else {
    compScore++;

    computerscore.innerText = compScore;

    msg.innerText = `you lose,${comchioce} beats ${userchioce}`;
    msg.style.backgroundColor = "red";
  }
};

const Draw = () => {
  msg.innerText = "game draw, try once again";
};

const playgame = (userchioce) => {

  const comchioce = gencomchioce();


  if (userchioce === comchioce) {
    Draw();
  } else {
    let userwin = true;
    if (userchioce === "rock") {
      userwin = comchioce === "paper" ? false : true;
    } else if (userchioce === "paper") {
      userwin = comchioce === "scissor" ? false : true;
    } else {
      userwin = comchioce === "rock" ? false : true;
    }
    showWinner(userwin, userchioce, comchioce);
  }
};

choices.forEach((chioce) => {
  chioce.addEventListener("click", () => {
    const userchioce = chioce.getAttribute("id");
    playgame(userchioce);
  });
});
