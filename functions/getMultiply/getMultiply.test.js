import {getMultiply} from './getMultiply.js';

console.log(getMultiply('5', 5) === undefined);
console.log(getMultiply(5, true) === undefined);
console.log(getMultiply(-5, 5) === undefined);
console.log(getMultiply(5, -5) === undefined); 
console.log(getMultiply(0, 5) === undefined); 
console.log(getMultiply(5, 0) === undefined); 
console.log(getMultiply(5, 5) === 25); 
