const prompt = require('prompt-sync')({ sigint: true });

// import from mules
const { PlayersFactory } = require('./Player');
const { insertMove } = require('./ScoreLogic');
const { turnConstructor } = require('./turn');
const { Y, obtainNewInput, getInput } = require('./InputController');

const validRangePlayers = (minPlayers, maxPlayers) => (N) => {
    return N >= minPlayers && N <= maxPlayers;
}

function initGame() {

    var players = [];
    var playersSupportArray = [];

    const numberOfRounds = 3;
    const numberOfPlaysPerRound = 3;

    const minPlayers = 2;
    const maxPlayers = 6;

    const turn = turnConstructor(numberOfPlaysPerRound);

    const getValidNumber = obtainNewInput(validRangePlayers(minPlayers, maxPlayers))(getInput);

    // ask how many players
    console.log("");
    const numberOfPlayers = Y(getValidNumber)(getInput("How many players? " + `(min:${minPlayers}, max:${maxPlayers}): `));

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