"use strict";

let gameArea = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

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
}

let startModalWindow = '';
/**
 * @returns global variable 'startModalWindow' which includes NodeList with modal window class
 */
function setStartModalWindow() {
    return startModalWindow = document.querySelectorAll('.game-area__start-window');
}

/**
 * Main game logyc
 */
(function setGameplay() {
    let gameStatus = getGameAreaStatus();
    // console.log("[gameStatus]", gameStatus);

    let modalWindow = setStartModalWindow();

    if (gameStatus === 0) {
        modalWindow[0].className = 'game-area__start-window active';
    }
    
})();
