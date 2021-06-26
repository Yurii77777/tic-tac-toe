"use strict";

let gameArea = [
    ["cell-1-1", "cell-1-2", "cell-1-3"],
    ["cell-2-1", "cell-2-2", "cell-2-3"],
    ["cell-3-1", "cell-3-2", "cell-3-3"],
];

let gameAreaNode = document.querySelectorAll('.game-area__item');
console.log('[gameAreaNode]', gameAreaNode);

let progress = [];

let userClick;

document.addEventListener("click", (e) => {
    userClick = e.target;

    if (
        (userClick.id === "cell-1-1" ||
            userClick.id === "cell-1-2" ||
            userClick.id === "cell-1-3" ||
            userClick.id === "cell-2-1" ||
            userClick.id === "cell-2-2" ||
            userClick.id === "cell-2-3" ||
            userClick.id === "cell-3-1" ||
            userClick.id === "cell-3-2" ||
            userClick.id === "cell-3-3") &&
        progress.length === 0
    ) {
        userClick.innerText = "x";
        userClick.className = "game-area__item active";
        progress.push("x");

        for (let i = 0; i < gameArea.length; i++) {
            for (let j = 0; j < gameArea[i].length; j++) {
                if (gameArea[i][j] === userClick.id) {
                    gameArea[i][j] = "x";
                }
            }
        }

    } else if (
        (userClick.id === "cell-1-1" ||
            userClick.id === "cell-1-2" ||
            userClick.id === "cell-1-3" ||
            userClick.id === "cell-2-1" ||
            userClick.id === "cell-2-2" ||
            userClick.id === "cell-2-3" ||
            userClick.id === "cell-3-1" ||
            userClick.id === "cell-3-2" ||
            userClick.id === "cell-3-3") &&
        progress.length > 0
    ) {
        let lastMove = progress[progress.length - 1];

        //TODO: Implement overwrite protection
        if (lastMove === "x") {
            userClick.innerText = "o";
            userClick.className = "game-area__item active";
            progress.push("o");

            for (let i = 0; i < gameArea.length; i++) {
                for (let j = 0; j < gameArea[i].length; j++) {
                    if (gameArea[i][j] === userClick.id) {
                        gameArea[i][j] = "o";
                    }
                }
            }

        } else {
            userClick.innerText = "x";
            userClick.className = "game-area__item active";
            progress.push("x");

            for (let i = 0; i < gameArea.length; i++) {
                for (let j = 0; j < gameArea[i].length; j++) {
                    if (gameArea[i][j] === userClick.id) {
                        gameArea[i][j] = "x";
                    }
                }
            }
        }
        
    } else {
        return;
    }

    //TODO: Implement modal window in each block with congratulations and buttons Quit || Restart
    if (gameArea[0][0] === gameArea[1][0] && gameArea[1][0] === gameArea[2][0]) {
        gameAreaNode[0].className = "game-area__item active win";
        gameAreaNode[3].className = "game-area__item active win";
        gameAreaNode[6].className = "game-area__item active win";
        
    } else if (gameArea[0][1] === gameArea[1][1] && gameArea[1][1] === gameArea[2][1]) {
        gameAreaNode[1].className = "game-area__item active win";
        gameAreaNode[4].className = "game-area__item active win";
        gameAreaNode[7].className = "game-area__item active win";
        
    } else if (gameArea[0][2] === gameArea[1][2] && gameArea[1][2] === gameArea[2][2]) {
        gameAreaNode[2].className = "game-area__item active win";
        gameAreaNode[5].className = "game-area__item active win";
        gameAreaNode[8].className = "game-area__item active win";
        
    } else if (gameArea[0][0] === gameArea[0][1] && gameArea[0][1] === gameArea[0][2]) {
        gameAreaNode[0].className = "game-area__item active win";
        gameAreaNode[1].className = "game-area__item active win";
        gameAreaNode[2].className = "game-area__item active win";
        
    } else if (gameArea[1][0] === gameArea[1][1] && gameArea[1][1] === gameArea[1][2]) {
        gameAreaNode[3].className = "game-area__item active win";
        gameAreaNode[4].className = "game-area__item active win";
        gameAreaNode[5].className = "game-area__item active win";
        
    } else if (gameArea[2][0] === gameArea[2][1] && gameArea[2][1] === gameArea[2][2]) {
        gameAreaNode[6].className = "game-area__item active win";
        gameAreaNode[7].className = "game-area__item active win";
        gameAreaNode[8].className = "game-area__item active win";
        
    } else if (gameArea[0][0] === gameArea[1][1] && gameArea[1][1] === gameArea[2][2]) {
        gameAreaNode[0].className = "game-area__item active win";
        gameAreaNode[4].className = "game-area__item active win";
        gameAreaNode[8].className = "game-area__item active win";
        
    } else if (gameArea[0][2] === gameArea[1][1] && gameArea[1][1] === gameArea[2][0]) {
        gameAreaNode[2].className = "game-area__item active win";
        gameAreaNode[4].className = "game-area__item active win";
        gameAreaNode[6].className = "game-area__item active win";
        
    } else {
        return;
    }

});

//TODO: Move duplicate code into a function
//TODO: Activate modal windows
//TODO: Add some css animations
//TODO: Implement game mode with computer
