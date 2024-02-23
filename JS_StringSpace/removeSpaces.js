

const removeSpaces = inputString => inputString.replace(/\s/g, '');


const stringWithSpaces = 'Hello World, this is an example.';
const stringWithoutSpaces = removeSpaces(stringWithSpaces);

console.log('String with spaces:', stringWithSpaces);
console.log('String without spaces:', stringWithoutSpaces);
