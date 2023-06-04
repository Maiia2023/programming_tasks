import {getSpliting} from './getSpliting.js';

console.log(getSpliting('5', 5) ===  undefined);
console.log(getSpliting(5, true) ===  undefined);
console.log(getSpliting(-5, 5) ===  undefined);
console.log(getSpliting(5, -5) ===  undefined);
console.log(getSpliting(5, 0) ===  undefined);
console.log(getSpliting(0, 5) ===  undefined);
console.log(getSpliting(5, 3) ===  undefined);
console.log(getSpliting(5, 5) === 1);
console.log(getSpliting(15, 5) === 3);
