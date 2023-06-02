import { getDifference } from './getDifference.js';

console.log(getDifference('5', 5) === undefined); 
console.log(getDifference(5, true) === undefined);
console.log(getDifference(-5, 5) === undefined);
console.log(getDifference(5, -5) === undefined);
console.log(getDifference(3, 5) === undefined);
console.log(getDifference(5, 3) === 2);
console.log(getDifference(5, 5) === 0);
console.log(getDifference(1.5, 5) === undefined);
console.log(getDifference(5, 5.5) === undefined);
