import { camelCase } from './camelCase.js';

console.log(camelCase('the-stealth-warrior') === 'theStealthWarrior');
console.log(camelCase('The_Stealth-Warrior') === 'TheStealthWarrior');
console.log(camelCase('The_Stealth_Warrior') === 'TheStealthWarrior');
