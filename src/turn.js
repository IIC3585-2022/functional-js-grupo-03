const { Y, obtainNewInput, getInput } = require('./InputController');

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

function displayRulesOfPlay() {
    console.log("\nThere are 4 type of plays: ");
    console.log("SB, DB, null or number,number");
    console.log("In the number,number, the second number is the points and the first number is the multiplier");
}

const getValidPlay = obtainNewInput(verifyPlay)(getInput);

const insertNewPlay = (number) => Y(getValidPlay)(getInput(`So, what is your ${number} play? `));

const combineFunctions = (f, g) => (...args) => f(g(...args));

const getNormalizedPlay = (N) => combineFunctions(normalizePlay, insertNewPlay)(N);

function normalizePlay(play) {

    if (['sb', 'db', 'null'].includes(play.toLowerCase())) return play;

    if (play.includes(',') && play.split(',').length === 2) {
        return play.split(',').map(Number);  // ej. [ 2, 15 ]
    }

    return 'null';
}


function verifyPlay(play) {

    if (['sb', 'db', 'null'].includes(play.toLowerCase())) return true;

    if (play.includes(',') && play.split(',').length === 2 && !play.includes('.')) {
        const [multiplier, score] = play.split(',');
        return (!!parseInt(multiplier) && !!parseInt(score));
    }

    return false;
}


module.exports = { turnConstructor };
