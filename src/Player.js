const prompt = require('prompt-sync')({ sigint: true });

function getPlayer() {

    // Solicita un input nombre al usuario por consola
    // retorna una tupla con su nombre y un puntaje
    // console.log("");
    // const name = prompt("What is your name? ");

    return {
        name: getPlayerName(),
        points: 501
    };
}

function getPlayerName() {
    return prompt("What is your name? ");
}

function getPlayers(numberOfPlayers) {
    return Array(parseInt(numberOfPlayers)).fill(0).map(getPlayer);
}

function PlayersFactory(numberOfPlayers) {

    // Crea una lista de jugadores
    // numberOfPlayers: numero de jugadores
    // retorna una lista de jugadores en desorden

    // const players = [];

    // for (let i = 0; i < numberOfPlayers; i++) {
    //     players.push(getPlayer());
    // }

    return shuffle(getPlayers(numberOfPlayers));

}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// PlayersFactory(3);

module.exports = { PlayersFactory };