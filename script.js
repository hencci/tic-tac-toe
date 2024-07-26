const grids = document.querySelectorAll(".grid");
const winText = document.querySelector("#winText");
const restartButton = document.querySelector(".restartButton");
const startButton = document.querySelector(".startButton");
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
    restartButton.addEventListener("click", restartGame);
    winText.textContent = `${currentPlayer}'s turn`;
}


function gridClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateGrid(this, cellIndex);
}


function updateGrid(grid, index) {
    options[index] = currentPlayer;
    grid.textContent = currentPlayer;
}


function playerChange() {
    currentPlayer = (currentPlayer == "X")? "O" : "X";
    winText.textContent = `${currentPlayer}'s turn`;
}


function checkWinner() {
    
}


function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    winText.textContent = `${currentPlayer}'s turn`;
    grids.forEach(grid => grid.textContent = "");
    running = true;
}