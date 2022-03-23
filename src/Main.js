const prompt = require('prompt-sync')({ sigint: true });

// import from mules
const { PlayersFactory } = require('./Player');
const { insertMove } = require('./ScoreLogic');
const { turn } = require('./turn');

const getNumberOfPlayers = (message) => {
    return prompt(`${message}`);
}

const validRangePlayers = (minPlayers, maxPlayers) => (N) => {
    return N >= minPlayers && N <= maxPlayers;
}

const obtainNewNumber = (isValid) => (getNewNumber) => (f) => (N => (isValid(N)) ? N : f(getNewNumber("Invalid number, try again: ")));

Y = f => (x => x(x))(x => f(y => x(x)(y)));

function initGame() {

    var players = [];
    var playersSupportArray = [];

    const numberOfRounds = 3;
    const numberOfPlaysPerRound = 3;

    const minPlayers = 2;
    const maxPlayers = 6;

    const getValidNumber = obtainNewNumber(validRangePlayers(minPlayers, maxPlayers))(getNumberOfPlayers);

    // ask how many players
    console.log("");
    const numberOfPlayers = Y(getValidNumber)(getNumberOfPlayers("How many players? " + `(min:${minPlayers}, max:${maxPlayers}): `));

    players = PlayersFactory(numberOfPlayers);

    // start the game
    for (let i = 0; i < numberOfRounds; i++) {

        console.log("\nRound " + (i + 1));

        // ask for each player to play
        players.forEach(player => {
            console.log("\nPlayer " + player.name + " turn");
            const play = turn();
            const newDataPlayer = insertMove(player, play);
            playersSupportArray.push(newDataPlayer);
        });

        players = playersSupportArray;
        playersSupportArray = [];

    }

    console.log("\nFinal score: ");

    players.forEach(player => {
        console.log("\nPlayer " + player.name + ": " + player.points);
    });

    return 0;
}

initGame();