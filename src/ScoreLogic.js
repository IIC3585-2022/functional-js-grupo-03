function insertMove(userData, play) {
    const { name, points } = userData;
    const newPoints = obtainNewPoints(processPlay2)(points, play);

    return {
        name,
        points: newPoints
    };
}

const obtainNewPoints = (f) => (pointsLeft, playData) => Math.abs(pointsLeft - f(playData));

function processPlay(play) {
    // play is an array of lenght 3
    // every item strings DB, SB or can be an array of lenght 2 (is no longer than that) with only integers

    // if the item is a string, we have to give the player the points that represents
    // example if the string is SB, we have to give the player 25 points
    // if the string is DB, we have to give the player 50 points

    // if the item is an array, we have to make a calculation of it multiplying the first item by the second item
    // example if the array is [15, 2], we have to give the player 30 points
    // if the array is [15, 2], we have to give the player 30 points

    // examples of play: ['DB', [3,20], [3,19]]
    // output: 167
    // examples of play: ['SB', 'SB', 'SB']
    // output: 75
    // examples of play: ['SB', [2,20], [3,20]]
    // output: 125

    let points = 0;

    play.forEach(element => {
        if (typeof (element) === 'string') {
            if (element.toLowerCase() === 'sb') {
                points += 25;
            } else if (element.toLowerCase() === 'db') {
                points += 50;
            }
        } else {
            points += element[0] * element[1];
        }
    });

    return points;
}

function processPlay2(play) {
    return play.reduce((previousValue, currentValue) => previousValue + processItem(currentValue), 0);
}

function processItem(item) {
    return typeof (item) === 'string' ? processString(item) : processArray(item);
}

function processString(item) {
    if (item.toLowerCase() === 'sb') {
        return 25;
    } else if (item.toLowerCase() === 'db') {
        return 50;
    }

    return 0;
}

function processArray(item) {
    return item.reduce((a, b) => a * b);
}

module.exports = { insertMove };
