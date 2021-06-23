"use strict";

let gameArea = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const sumOfGameAreaItems = []
    .concat(...gameArea)
    .reduce((acc, item) => acc + item);
// console.log("[sumOfGameAreaItems]", sumOfGameAreaItems);

// if sumOfGameAreaItems === 0 show Button 'Start'
