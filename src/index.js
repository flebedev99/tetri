//Setup
const theme = document.getElementById("Audio");
const gameArea = document.getElementById("game");
theme.play(); // play theme song
//Setting the variables
let ternomino;
let message;
let terX = 250;
let terY = 700;
let terW = 50;
let terH = 50;
let terR = 0;
let terSpeed = 1;
let XLlimit = 10;
let XRlimit = 440;
let Ylevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let row = 5;
//
//Creating ternominoes
function createTernomino() {
  ternomino = document.createElement("div");
  ternomino.style.backgroundColor = "none";
  ternomino.style.border = "2px white solid";
  ternomino.style.borderRadius = "50%";
  ternomino.style.width = terW + "px";
  ternomino.style.height = terH + "px";
  ternomino.style.position = "absolute";
  ternomino.style.left = terX + "px";
  ternomino.style.bottom = terY + "px";
  gameArea.appendChild(ternomino);
}
//Create message (winner?)
function createMessage(Text) {
  message = document.createElement("p");
  message.style.color = "white";
  message.innerText = Text;
  message.style.textAlign = "center";
  message.style.position = "absolute";
  message.style.fontSize = "100px";
  message.style.width = "100%";
  message.style.top = 0;
  gameArea.appendChild(message);
}
//Updating ternomino position
function updateTernomino() {
  terY -= terSpeed;
  ternomino.style.left = terX + "px";
  ternomino.style.bottom = terY + "px";
  ternomino.style.transform = "rotate(" + terR + "deg)";
  //Check if ternimino has hit the ground
  checkIfTerHitTheGround();
}
//Check if ter hit the ground
function checkIfTerHitTheGround() {
  if (terY < Ylevels[row]) {
    Ylevels[row] += terH;
    createTernomino();
    terY = 700;
    terX = 250;
    row = 5;
    checkGameOver();
  }
}
//Check game over
function checkGameOver() {
  if (false) {
    createMessage("You lose!");
  }
}
//Gameloop
function gameLoop() {
  updateTernomino();
  setTimeout(gameLoop, 10);
}
//Starting the game
function startGame() {
  createTernomino();
  gameLoop();
}
//Input
document.addEventListener("keydown", input);
function input(c) {
  if (c.keyCode === 37) {
    if (terX < XLlimit /*If left arrow pressed */) {
      return;
    }
    terX += -terW;
    row--;
  }
  if (c.keyCode === 39) {
    if (terX > XRlimit /*If right arrow pressed */) {
      return;
    }
    terX += terW;
    row++;
  }
  if (c.keyCode === 32) {
    startGame();
  }
}
