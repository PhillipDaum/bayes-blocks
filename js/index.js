// maybe like have a counter or something and if each block has been passed through the function (x) times it goes away or something
import blocks from "./components.js";
// let a;
// let b;
// let probabilityOfA;
// let probabilityOfB;
// let probabilityofBGivenA;
// let probabilityOfAGivenB =
//   (probabilityofBGivenA * probabilityOfA) / probabilityOfB;

let oldRow = [];
let newRow = [];

function makeRowArray() {
  for (let i = 0; i < 9; i++) {
    let dHundred = Math.floor(Math.random() * 100);
    if (dHundred === 0) {
      newRow.push(blocks.reallyBadBlocks[0]);
    } else if (0 < dHundred && dHundred < 3) {
      newRow.push(blocks.reallyGoodBlocks[0]);
    } else if (3 < dHundred && dHundred < 13) {
      newRow.push(
        blocks.badBlocks[Math.floor(Math.random() * blocks.badBlocks.length)]
      );
    } else {
      newRow.push(
        blocks.goodBlocks[Math.floor(Math.random() * blocks.goodBlocks.length)]
      );
    }
  }
}

// I think I'm gonna want to set each one a spot in the grid
// maybe each row can have a number
// then each block can have a number
function makeRow() {
  makeRowArray();
  let row = document.createElement("div");
  row.className = "row";
  row.id = "row-"; //+i
  document.getElementById("game-top").appendChild(row);
  for (let i = 0; i < newRow.length; i++) {
    let block = document.createElement("div");
    let thisBlock = newRow[i];
    block.id = "block-" + i;
    block.innerText = thisBlock.patterns[0];
    block.className = thisBlock.className;
    // tweek
    document.getElementById("row-").appendChild(block);
    oldRow.push(newRow[i]);
  }
  newRow = [];
}

function makeManyRows() {
  for (let i = 0; i < 16; i++) {
    makeRow();
  }
}
makeManyRows();

// paddle moves side to side
document.addEventListener("keydown", move);
let paddlePosition = 42.5;
function move(e) {
  if (e.code === "ArrowLeft" && paddlePosition > 0) {
    paddlePosition = paddlePosition - 3;
    document.querySelector("#paddle").style.marginLeft = `${paddlePosition}%`;
  } else if (e.code === "ArrowRight" && paddlePosition < 85) {
    paddlePosition = paddlePosition + 3;
    document.querySelector("#paddle").style.marginLeft = `${paddlePosition}%`;
  };
};

let ball;
let ballX = 1;
let ballY = 1;
function makeBall() {
  // makes the ball
  ball = document.createElement('div');
  ball.className = "ball";
  ball.id = "ball";
  document.querySelector(".ball-holder").appendChild(ball);
}
makeBall()

// let moving;
let movingUp = true;
let movingDown = false;
let speed = 40;
function moveBall() {
  let hit = document.querySelector(".ball-holder");
  let style = window.getComputedStyle(hit);
  let top = style.getPropertyValue('margin-top');
  let topValue = top.split("p")[0];
  if (movingUp === true && topValue > 0) {
    // x axis between 0 and 97
    document.querySelector("#ball").style.marginLeft = `${ballX}%`;
    // for now 0-22rem in the kitchen
    document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
    ballX++;
    ballY++;
    setTimeout(moveBall, speed)
  } else if (movingUp === false && ballY > -1.5 && ballY < 1 && ballX >= (paddlePosition - 7.5) && ballX <= (paddlePosition + 7.5)) {
    // bounces off paddle (more or less)
    movingUp = true;
    setTimeout(moveBall, speed)
  } else if (movingUp === true) {
    movingUp = false;
    movingDown = true;
    if (ballX < 11) {
      console.log("break 1");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX >= 11 && ballX <= 21) {
      console.log("break 2");
      // let block = document.querySelector
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 21 && ballX < 33) {
      console.log("break 3");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 33 && ballX < 44) {
      console.log("break 4");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 44 && ballX < 55) {
      console.log("break 5");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 55 && ballX < 66) {
      console.log("break 6");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 66 && ballX < 77) {
      console.log("break 7");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 77 && ballX < 88) {
      console.log("break 8");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    } else if (ballX > 88 && ballX < 100) {
      console.log("break 9");
      document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed);
    }
    console.log(movingDown)
  } else {
    document.querySelector("#ball").style.marginLeft = `${ballX}%`;
    document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
    ballX++;
    ballY--;
    setTimeout(moveBall, speed);
  }
}

// use this to delete blocks!!
// then assign each one a spot in the grid
// let block = document.querySelectorAll("#block-2");
// let blockSpot = block.length - 1;
// block[blockSpot].remove();
// console.log(block[blockSpot]);

let startButton = document.querySelector("#start");
startButton.addEventListener("click", playGame);
function playGame() {
  // moving = true;
  moveBall();
  startButton.style.display = "none";
}
