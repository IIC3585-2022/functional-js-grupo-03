const { Y, obtainNewInput, getInput } = require('./InputController');

const turnConstructor = (numberOfPlays) => () => {
    return getNPlaysInArray(numberOfPlays);
}

function displayRulesOfPlay() {
    console.log("\nThere are 4 type of plays: ");
    console.log("SB, DB, null or number,number");
    console.log("In the number,number, the second number is the points and the first number is the multiplier");
}

const getValidPlay = obtainNewInput(verifyPlay)(getInput);

const insertNewPlay = (number) => Y(getValidPlay)(getInput(`So, What is your ${number} play? `));

const combineFunctions = (f, g) => (...args) => f(g(...args));

const getNormalizedPlay = (N) => combineFunctions(normalizePlay, insertNewPlay)(N);

const getNPlaysInArray = (N) => {
    return Array(...Array(N).keys()).map((value) => value + 1).map((n) => {
        displayRulesOfPlay();
        return getNormalizedPlay(n);
    });
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
        const [multiplier, score] = play.split(',');
        if (!play.includes('.')) {
            return (!!parseInt(array[0]) && !!parseInt(array[1]));
        }
    }

    return false;
}


module.exports = { turnConstructor };
