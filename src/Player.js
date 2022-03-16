function getPlayerName() {

    // Solicita un nombre al usuario por consola
    // retorna una tupla con su nombre y un puntaje

    const name = prompt("Ingrese su nombre");

    return [name, 501];

}

function PlayersFactory(numberOfPlayers) {

    // Crea una lista de jugadores
    // numberOfPlayers: numero de jugadores
    // retorna una lista de jugadores

    const players = [];

    for (let i = 0; i < numberOfPlayers; i++) {
        players.push(getPlayerName());
    }

    return players;

}