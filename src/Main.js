const prompt = require('prompt-sync')({ sigint: true });

// import from mules
const { PlayersFactory } = require('./Player');
const { insertMove } = require('./ScoreLogic');
const { turn } = require('./turn');


function initGame() {

    var players = [];
    var playersSupportArray = [];

    const numberOfRounds = 3;

    // ask how many players
    console.log("");
    const numberOfPlayers = prompt("How many players? ");

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