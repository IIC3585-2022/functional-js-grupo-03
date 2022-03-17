const prompt = require('prompt-sync')({ sigint: true });

// import from mules
const { PlayersFactory } = require('./Player');
const { insertMove } = require('./ScoreLogic');
const { turn } = require('./turn');


function initGame() {

    var players = [];
    var playersSupportArray = [];

    const numberOfRound = 3;

    // ask how many players
    console.log("");
    const numberOfPlayers = prompt("How many players? ");

    players = PlayersFactory(numberOfPlayers);

    // start the game
    for (let i = 0; i < numberOfRound; i++) {

        // ask for each player to play
        players.forEach(player => {
            const play = turn();
            const newDataPlayer = insertMove(player, play);
            playersSupportArray.push(newDataPlayer);
        });

        players = playersSupportArray;
        playersSupportArray = [];

    }

    return 0;
}

initGame();