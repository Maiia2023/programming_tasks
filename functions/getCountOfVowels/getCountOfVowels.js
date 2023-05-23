/**
 * @function getCountOfVowels
 * @param {string} str 
 * @returns {number}
 */

export const getCountOfVowels = (str) => {
  let count = 0;
  const text = str.toLowerCase();
  const vowels = 'aeiou';

  for (const char of text) {
    if (vowels.includes(char)) ++count;
  }

  return count;
};
