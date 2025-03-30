const _ = require("lodash");

// Sample array of numbers
const numbers = [10, 5, 8, 25, 30, 2];

// Find min and max using Lodash
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

// Log results
console.log("Maximum number:", maxNumber);
console.log("Minimum number:", minNumber);
