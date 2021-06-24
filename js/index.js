"use strict";

let gameArea = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let startModalWindow = "";
let modalWindow = "";
let userClick = "";

document.addEventListener("click", (e) => {
    userClick = e.target;
    console.log("[userClick]", userClick);

    if (userClick.className === "button new-game") {
        modalWindow[0].className = "game-area__start-window";
    }
});

/**
 * Function returns game status
 * @returns 0 => "New Game"
 * @returns else => "Restart" || "Quit"
 */
const getGameAreaStatus = () => {
    const sumOfGameAreaItems = []
        .concat(...gameArea)
        .reduce((acc, item) => acc + item);

    return sumOfGameAreaItems;
};

/**
 * @returns global variable 'startModalWindow' which includes NodeList with modal window class
 */
function setStartModalWindow() {
    return (startModalWindow = document.querySelectorAll(
        ".game-area__start-window"
    ));
}

/**
 * Main game function
 */
(function setGameplay() {
    let gameStatus = getGameAreaStatus();
    // console.log("[gameStatus]", gameStatus);

    modalWindow = setStartModalWindow();

    if (gameStatus === 0) {
        modalWindow[0].className = "game-area__start-window active";
    }
})();
