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

  hitPosition = randomSquare.id

  if(timeLeft.innerText == 0) {
    timeLeft.textContent = 0
    clearInterval(timer)
    alert(`Game over! Your score is ${result}`)
    hitPosition = null
  }
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (hitPosition == square.id) {
            result++
            score.innerText = result
            hitPosition = null
        }
    })
})

const startGame = () => {
    timer = setInterval(randomSquare, 750)
}

const stopGame = () => {
    clearInterval(timer)
}

start.addEventListener('click', startGame)
pause.addEventListener('click', stopGame)


