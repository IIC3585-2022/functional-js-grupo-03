const prompt = require('prompt-sync')({ sigint: true });
const _ = require('lodash');

function turn() {

    // El jugador ingresa 3 jugadas
    const plays = 3;

    displayRulesOfPlay();

    // var play = curriedPlayArray(insertNewPlay(0));

    // for (let i = 1; i < plays; i++) {
    //     displayRulesOfPlay();
    //     play = play(insertNewPlay(i));
    // }

    return callCurriedFunctionNTimes(plays, curriedNPlayArray(plays), insertNewPlay);

}

/** Aqui convendria usar un Y combinator */
const callCurriedFunctionNTimes = (n, fn, gx) => (n === 1) ? fn(gx(n)) : callCurriedFunctionNTimes(n - 1, fn, gx)(gx(n));


function displayRulesOfPlay() {
    console.log("\nThere are 4 type of plays: ");
    console.log("SB, DB, null or number,number");
    console.log("In the number,number, the second number is the points and the first number is the multiplier");
}

const insertNewPlay = (nPlay) => {

    var newPlay = getPlay(nPlay);

    while (!verifyPlay(newPlay)) {
        console.log("\nInvalid play, try again");
        displayRulesOfPlay();
        newPlay = getPlay(nPlay);
    }

    return normalizePlay(newPlay);
}

function normalizePlay(play) {

    if (['sb', 'db', 'null'].includes(play.toLowerCase())) { return play; }

    else if (play.includes(',') && play.split(',').length === 2) {
        const array = play.split(',');
        return [parseInt(array[0]), parseInt(array[1])];
    }

    return 'null';
}


function verifyPlay(play) {

    if (['sb', 'db', 'null'].includes(play.toLowerCase())) { return true; }

    else if (play.includes(',') && play.split(',').length === 2) {
        const array = play.split(',');
        if (!array[0].includes('.') && !array[1].includes('.')) {
            if (!!parseInt(array[0]) && !!parseInt(array[1])) return true;
        }
    }

    return false;
}

function getPlay(number) {
    console.log("");
    return prompt(`So, What is your ${number} play? `);
}

function createNewArray(...args) {
    return new Array(...args);
}

function playArray(firstPlay, secondPlay, thirdPlay) {
    return [firstPlay, secondPlay, thirdPlay];
}

var curriedPlayArray = _.curry(playArray);

var curriedNPlayArray = (N) => _.curry(createNewArray, N);

// var play = curriedPlayArray(0);

// for (let i = 1; i < 3; i++) {
//     console.log(i);
//     play = play(i);
// }

// console.log(play);

// console.log(curriedNPlayArray(3)(1)(2, 3));

// console.log(turn());


module.exports = { turn };
