// maybe like have a counter or something and if each block has been passed through the function (x) times it goes away or something
import blocks from "./components.js";

let a;
let b;
let probabilityOfA;
let probabilityOfB;
let probabilityofBGivenA;
let probabilityOfAGivenB =
  (probabilityofBGivenA * probabilityOfA) / probabilityOfB;

// block types css classes.
// bay theorem each row.
//90% chance of a good block, a 9% chance of a bad block and .5 for each super block
//
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
    block.innerText = thisBlock.patterns[0];
    block.className = thisBlock.className;
    // push it to array.
    document.getElementById("row-").appendChild(block);
    oldRow.push(newRow[i]);
  }
  newRow = [];
}

function makeManyRows() {
  for (let i = 0; i < 36; i++) {
    makeRow();
  }
}
makeManyRows();
function moveRight() {
    // change number in css class

}

function moveLeft() {
    //
}

function moveThePaddle() {
    paddle.addEventListener("keydown", function)


}
// side key event listeners can move 1% per 5 miliseconds

// move paddle. reset css value as a whole number percentage all the way left 0 to 85% all the way right
// the middle is at 42.5%
// `${movement}%`
// blocks really otta come as rows just pushing down.
// then the blocks can be of two types,
// they may or may not take up one, two, or three grid spaces.

// they could maybe push back into the array lol
