const grids = document.querySelectorAll(".grid");
const winText = document.querySelector("#winText");
const restartBtn = document.querySelector(".restartButton");
const startButton = document.querySelector(".startButton")
const winConditions =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

startGame();


function startGame() {
    running = true;
    grids.forEach(grid => grid.addEventListener("click", gridClicked));

}


function gridClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateGrid(this, cellIndex);
}


function updateGrid() {
    options[index] = currentPlayer;
    grid.textContent = currentPlayer;
}


function playerChange() {

}


function checkWinner() {

}


function restartGame() {

}