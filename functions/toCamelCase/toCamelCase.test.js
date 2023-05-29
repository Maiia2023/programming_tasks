import {toCamelCase} from './toCamelCase.js';

console.log(toCamelCase('the-stealth-warrior' === 'theStealthWarrior'));

console.log(toCamelCase('The_Stealth-Warrior'==='toCamelCase'));

console.log(toCamelCase('The_Stealth_Warrior'==='TheStealthWarrior'));
