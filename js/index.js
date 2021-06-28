"use strict";

let gameArea = [
    ["cell-1-1", "cell-1-2", "cell-1-3"],
    ["cell-2-1", "cell-2-2", "cell-2-3"],
    ["cell-3-1", "cell-3-2", "cell-3-3"],
];

let gameAreaNode = document.querySelectorAll(".game-area__item");
let startWindow = document.querySelectorAll(".game-area__start-window.active");
let strikethroughLine = document.querySelectorAll(".strikethrough-line");

let progress = [];
let userClick;

document.addEventListener("click", (e) => {
    userClick = e.target;

    if (userClick.className === "button new-game") {
        startWindow[0].className = "game-area__start-window";
    }

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
        setXorO("x");
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

        if (lastMove === "x") {
            setXorO("o");
        } else {
            setXorO("x");
        }
    } else {
        return;
    }

    //TODO: Implement modal window in each block with congratilations and buttons Quit || Restart
    if (
        gameArea[0][0] === gameArea[1][0] &&
        gameArea[1][0] === gameArea[2][0]
    ) {
        addClassWin(0, 3, 6);
        strikethroughLine[0].className =
            "strikethrough-line active-column first-column-line";
    } else if (
        gameArea[0][1] === gameArea[1][1] &&
        gameArea[1][1] === gameArea[2][1]
    ) {
        addClassWin(1, 4, 7);
        strikethroughLine[0].className =
            "strikethrough-line active-column second-column-line";
    } else if (
        gameArea[0][2] === gameArea[1][2] &&
        gameArea[1][2] === gameArea[2][2]
    ) {
        addClassWin(2, 5, 8);
        strikethroughLine[0].className =
            "strikethrough-line active-column third-column-line";
    } else if (
        gameArea[0][0] === gameArea[0][1] &&
        gameArea[0][1] === gameArea[0][2]
    ) {
        addClassWin(0, 1, 2);
        strikethroughLine[0].className =
            "strikethrough-line active-row first-row-line";
    } else if (
        gameArea[1][0] === gameArea[1][1] &&
        gameArea[1][1] === gameArea[1][2]
    ) {
        addClassWin(3, 4, 5);
        strikethroughLine[0].className =
            "strikethrough-line active-row second-row-line";
    } else if (
        gameArea[2][0] === gameArea[2][1] &&
        gameArea[2][1] === gameArea[2][2]
    ) {
        addClassWin(6, 7, 8);
        strikethroughLine[0].className =
            "strikethrough-line active-row third-row-line";
    } else if (
        gameArea[0][0] === gameArea[1][1] &&
        gameArea[1][1] === gameArea[2][2]
    ) {
        addClassWin(0, 4, 8);
        strikethroughLine[0].className =
            "strikethrough-line active-column diagonal-1";
    } else if (
        gameArea[0][2] === gameArea[1][1] &&
        gameArea[1][1] === gameArea[2][0]
    ) {
        addClassWin(2, 4, 6);
        strikethroughLine[0].className =
            "strikethrough-line active-column diagonal-2";
    } else {
        return;
    }
});

/**
 * Function set to the gameArea array value 'x' or 'y'
 * @value Set 'x' or 'o' like string
 */
function setXorO(value) {
    userClick.innerText = value;
    userClick.className = "game-area__item active";
    progress.push(value);

    for (let i = 0; i < gameArea.length; i++) {
        for (let j = 0; j < gameArea[i].length; j++) {
            if (gameArea[i][j] === userClick.id) {
                gameArea[i][j] = value;
            }
        }
    }
}

/**
 * Function change class name of item in gameAreaNode array
 * @node1 number of node item in gameAreaNode wich must change class name
 * @node2 number of node item in gameAreaNode wich must change class name
 * @node3 number of node item in gameAreaNode wich must change class name
 */
function addClassWin(node1, node2, node3) {
    gameAreaNode[node1].className = "game-area__item active win";
    gameAreaNode[node2].className = "game-area__item active win";
    gameAreaNode[node3].className = "game-area__item active win";
}

//TODO: Activate modal windows
//TODO: Add some css animations
//TODO: Implement game mode with computer
