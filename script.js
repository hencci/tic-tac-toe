const grids = document.querySelectorAll(".grid");
const winText = document.querySelector("#winText");
const restartButton = document.querySelector(".restartButton");
const startButton = document.querySelector(".startButton");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

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
let players = [];
let currentPlayerIndex = 0;
let running = false;

startButton.addEventListener("click", startGame);


const createPlayer = (playerName, mark) => {
    return {playerName, mark}
}

function startGame() {
    players = [
        createPlayer(player1.value, "X"),
        createPlayer(player2.value, "O")
    ]
    running = true;
    grids.forEach(grid => grid.addEventListener("click", gridClicked));
    restartButton.addEventListener("click", restartGame);
    winText.textContent = `${players[currentPlayerIndex].playerName}'s turn`;
}


function gridClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateGrid(this, cellIndex);
    checkWinner();
}


function updateGrid(grid, index) {
    options[index] = players[currentPlayerIndex].mark;
    grid.textContent = players[currentPlayerIndex].mark;
}


function playerChange() {
    currentPlayerIndex = (currentPlayerIndex == 0)? 1 : 0;
    winText.textContent = `${players[currentPlayerIndex].playerName}'s turn`;
}


function checkWinner() {
    let won = false;
    for(let win = 0; win<winConditions.length; win++){
        const condition = winConditions[win];
        const gridA = options[condition[0]];
        const gridB = options[condition[1]];
        const gridC = options[condition[2]];

        if(gridA == "" || gridB == "" || gridC == ""){
            continue;
        }
        if(gridA == gridB && gridB == gridC){
            won = true;
            break;
        }
    }

    if(won){
        winText.textContent = `${players[currentPlayerIndex].playerName} wins`;
        running = false;
    }
    else if(!options.includes("")){
        winText.textContent = "Oops! It's a Draw";
        running = false;
    }
    else{
        playerChange();
    }
}


function restartGame() {
    currentPlayerIndex = 0;
    options = ["", "", "", "", "", "", "", "", ""];
    winText.textContent = `${players[currentPlayerIndex].playerName}'s turn`;
    grids.forEach(grid => grid.textContent = "");
    running = true;
}