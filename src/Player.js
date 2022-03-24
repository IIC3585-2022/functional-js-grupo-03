const prompt = require('prompt-sync')({ sigint: true });

function getPlayer() {

    // Solicita un input nombre al usuario por consola
    // retorna una tupla con su nombre y un puntaje

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
    return shuffle(getPlayers(numberOfPlayers));
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

module.exports = { PlayersFactory };