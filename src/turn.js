const { Y, obtainNewInput, getInput } = require('./InputController');

// function turn() {

//     // El jugador ingresa 3 jugadas
//     const plays = 3;

//     // displayRulesOfPlay();

//     // var play = curriedPlayArray(insertNewPlay(0));

//     // for (let i = 1; i < plays; i++) {
//     //     displayRulesOfPlay();
//     //     play = play(insertNewPlay(i));
//     // }

//     // return callCurriedFunctionNTimes(plays, curriedNPlayArray(plays), insertNewPlay);
//     return getNPlaysInArray(plays);

// }

const turnConstructor = (numberOfPlays) => () => {
    return getNPlaysInArray(numberOfPlays);
}

const getNPlaysInArray = (N) => {
    return Array(...Array(N).keys())
        .map(value => value + 1)
        .map(n => {
            displayRulesOfPlay();
            return getNormalizedPlay(n);
        });
}

<<<<<<< HEAD
/** Aqui convendria usar un Y combinator */
// se consiguio
// const callCurriedFunctionNTimes = (n, fn, gx) => (n === 1) ? fn(gx(n)) : callCurriedFunctionNTimes(n - 1, fn, gx)(gx(n));

=======
>>>>>>> 09828b3edb3c001383ebbb69861c3ac8adc1b472
function displayRulesOfPlay() {
    console.log('\nThere are 4 type of plays: ');
    console.log('SB, DB, null or number,number');
    console.log('In the number,number, the second number is the points and the first number is the multiplier');
}

const getValidPlay = obtainNewInput(verifyPlay)(getInput);

const insertNewPlay = (number) => Y(getValidPlay)(getInput(`So, what is your ${number} play? `));

const combineFunctions = (f, g) => (...args) => f(g(...args));

const getNormalizedPlay = (N) => combineFunctions(normalizePlay, insertNewPlay)(N);

<<<<<<< HEAD
// const insertNewPlay = (nPlay) => {

//     var newPlay = getPlay(nPlay);

//     while (!verifyPlay(newPlay)) {
//         console.log("\nInvalid play, try again");
//         displayRulesOfPlay();
//         newPlay = getPlay(nPlay);
//     }

//     return normalizePlay(newPlay);
// }

=======
>>>>>>> 09828b3edb3c001383ebbb69861c3ac8adc1b472
function normalizePlay(play) {

    if (['sb', 'db', 'null'].includes(play.toLowerCase())) return play;

    if (play.includes(',') && play.split(',').length === 2) {
<<<<<<< HEAD
        return play.split(',').map(Number);
=======
        return play.split(',').map(Number);  // ej. [ 2, 15 ]
>>>>>>> 09828b3edb3c001383ebbb69861c3ac8adc1b472
    }

    return 'null';
}

function verifyPlay(play) {

    if (['sb', 'db', 'null'].includes(play.toLowerCase())) return true;
<<<<<<< HEAD
=======

>>>>>>> 09828b3edb3c001383ebbb69861c3ac8adc1b472
    if (play.includes(',') && play.split(',').length === 2 && !play.includes('.')) {
        const [multiplier, score] = play.split(',');
        return (!!parseInt(multiplier) && !!parseInt(score));
    }

    return false;
}

// function getPlay(number) {
//     console.log("");
//     return prompt(`So, What is your ${number} play? `);
// }

// function createNewArray(...args) {
//     return new Array(...args);
// }

// function playArray(firstPlay, secondPlay, thirdPlay) {
//     return [firstPlay, secondPlay, thirdPlay];
// }

// var curriedPlayArray = _.curry(playArray);

// var curriedNPlayArray = (N) => _.curry(createNewArray, N);

// var play = curriedPlayArray(0);

// for (let i = 1; i < 3; i++) {
//     console.log(i);
//     play = play(i);
// }

// console.log(play);

// console.log(curriedNPlayArray(3)(1)(2, 3));

// console.log(turn());

module.exports = { turnConstructor };
