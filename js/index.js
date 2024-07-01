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

function makeRow() {
  makeRowArray();
  let row = document.createElement("div");
  row.className = "row";
  row.id = "row-"; //+i
  document.getElementById("game-top").appendChild(row);
  for (let i = 0; i < newRow.length; i++) {
    let block = document.createElement("div");
    let thisBlock = newRow[i];
    block.id = "block";
    block.innerText = thisBlock.patterns[0];
    block.className = thisBlock.className;
    // push it to array.
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
    paddlePosition = paddlePosition - 1;
    document.querySelector("#paddle").style.marginLeft = `${paddlePosition}%`;
  } else if (e.code === "ArrowRight" && paddlePosition < 85) {
    console.log("Right");
    paddlePosition = paddlePosition + 1;
    document.querySelector("#paddle").style.marginLeft = `${paddlePosition}%`;
    console.log("Right", paddlePosition)
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

// movement can be a loop, maybe a while loop
// then wait a few miiliseconds and then 



let moving;
let movingUp = true;
let speed = 40;
function moveBall() {
  // if movingUp === true and ballholder.marginTop > 0
  let hit = document.querySelector(".ball-holder");
  let style = window.getComputedStyle(hit);
  let top = style.getPropertyValue('margin-top');
  let topValue = top.split("p")[0];
    if (movingUp === true && topValue > 0) {
      console.log(topValue);
      // x axis between 0 and 97
       document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      // for now 0-22rem in the kitchen
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY++;
      setTimeout(moveBall, speed)
     } else if (ballY === -1 && ballX >= (paddlePosition -7.5) && ballX <= (paddlePosition + 7.5)) {
      console.log("make money");
      movingUp = true;
      setTimeout(moveBall, speed)
     }
     else {
      console.log("lose moeny")
      // unless the margin bottom is 0 and its in the same space as the paddle
      movingUp = false;
       document.querySelector("#ball").style.marginLeft = `${ballX}%`;
      document.querySelector(".ball-holder").style.marginBottom = `${ballY}rem`;
      ballX++;
      ballY--;
      setTimeout(moveBall, speed)
     }


}

let startButton = document.querySelector("#start");
startButton.addEventListener("click", playGame);
function playGame() {
  moving = true;
  moveBall();
  startButton.style.display = "none";
}
