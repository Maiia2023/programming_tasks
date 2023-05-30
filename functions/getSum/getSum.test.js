import {getSum} from './getSum.js';

console.log(getSum('5', 5) === undefined); 
console.log(getSum(5, true) === undefined); 
console.log(getSum(-5, 5) === undefined); 
console.log(getSum(5, -5) === undefined); 
console.log(getSum(5, 0)=== undefined);
console.log(getSum(5, 1.5)=== undefined);
console.log(getSum(5, 5) === 10); 
