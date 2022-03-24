function insertMove(userData, play) {
    const { name, points } = userData;
    const newPoints = obtainNewPoints(processPlay)(points, play);

    return {
        name,
        points: newPoints
    };
}

const obtainNewPoints = (f) => (pointsLeft, playData) => Math.abs(pointsLeft - f(playData));

function processPlay(play) {
    return play.reduce((previousValue, currentValue) => previousValue + processItem(currentValue), 0);
}

function processItem(item) {
    return typeof (item) === 'string' ? processString(item) : processArray(item);
}

function processString(item) {
    if (item.toLowerCase() === 'sb') return 25;
    if (item.toLowerCase() === 'db') return 50;
    return 0;
}

function processArray(item) {
    return item.reduce((a, b) => a * b);
}

module.exports = { insertMove };