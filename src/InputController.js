const prompt = require('prompt-sync')({ sigint: true });

const Y = f => (x => x(x))(x => f(y => x(x)(y)));

const obtainNewInput = (isValid) => (getNewInput) => (f) => N => (isValid(N)) ? N : f(getNewInput('Invalid input, try again: '));

const getInput = (message) => {
    return prompt(`${message}`);
}

module.exports = { Y, obtainNewInput, getInput };
