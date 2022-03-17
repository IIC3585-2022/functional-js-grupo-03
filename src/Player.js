const prompt = require('prompt-sync')({ sigint: true });

function getPlayerName() {

    // Solicita un input nombre al usuario por consola
    // retorna una tupla con su nombre y un puntaje
    console.log("");
    const name = prompt("What is your name? ");

    return {
        name,
        points: 501
    };
}

function PlayersFactory(numberOfPlayers) {

    // Crea una lista de jugadores
    // numberOfPlayers: numero de jugadores
    // retorna una lista de jugadores

    const players = [];

    for (let i = 0; i < numberOfPlayers; i++) {
        players.push(getPlayerName());
    }

    return shuffle(players);

}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// PlayersFactory(3);

module.exports = { PlayersFactory };