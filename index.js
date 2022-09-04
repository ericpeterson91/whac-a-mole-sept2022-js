const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
let result = 0;
let countdown = 60
let timer;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  countdown--
    timeLeft.innerText = countdown
}

const startGame = () => {
    timer = setInterval(randomSquare, 750)
}

const stopGame = () => {
    clearInterval(timer)
}

start.addEventListener('click', startGame)
pause.addEventListener('click', stopGame);
