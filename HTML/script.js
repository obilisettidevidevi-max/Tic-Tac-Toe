alert("JavaScript is working")

// Start Game Button
let startButton = document.getElementById("Startgame");

// Restart Game Button
let restartButton = document.getElementById("Restartgame");

// Game Message
let message = document.getElementById("message");

// Board Cells
let cells = document.querySelectorAll(".cell");

// Current Player
let currentPlayer = "X";

// Game Status
let gameStarted = false;

// Start Game
startButton.addEventListener("click", function () {
    gameStarted = true;
    currentPlayer = "X";
    message.textContent = "Player X's Turn";

    cells.forEach(function (cell) {
        cell.textContent = "";
        cell.disabled = false;
    });
});

// Winning combinations
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Cell Click
cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        if (gameStarted === false || cell.textContent !== "") {
            return;
        }

        cell.textContent = currentPlayer;

        let winnerFound = false;

        winningCombinations.forEach(function (combination) {
            let a = cells[combination[0]].textContent;
            let b = cells[combination[1]].textContent;
            let c = cells[combination[2]].textContent;

            if (a !== "" && a === b && b === c) {
                winnerFound = true;
            }
        });

        if (winnerFound) {
            message.textContent = "Player " + currentPlayer + " Wins!";
            gameStarted = false;

            cells.forEach(function (cell) {
                cell.disabled = true;
            });

            return;
        }

        let draw = true;

        cells.forEach(function (cell) {
            if (cell.textContent === "") {
                draw = false;
            }
        });

        if (draw) {
            message.textContent = "It's a Draw!";
            gameStarted = false;

            cells.forEach(function (cell) {
                cell.disabled = true;
            });

            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = "Player " + currentPlayer + "'s Turn";
    });
});

// Restart Game
restartButton.addEventListener("click", function () {
    currentPlayer = "X";
    gameStarted = false;
    message.textContent = "Click Start Game";

    cells.forEach(function (cell) {
        cell.textContent = "";
        cell.disabled = true;
    });
});

// Initial State
cells.forEach(function (cell) {
    cell.disabled = true;
});

message.textContent = "Click Start Game";