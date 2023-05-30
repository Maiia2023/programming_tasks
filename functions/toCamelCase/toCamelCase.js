/**
 * @function toCamelCase
 * @param {string}
 * @returns {string}
 */

export const toCamelCase = (str) => {
  if (typeof str !== 'string')
    return '';

  const words = str.split(/[-_]/);
  const camelCaseText = words.map((word, index) => {
    if (index === 0) {
      const constant1 = word.charAt(0);
      const constant2 = word.slice(1);
      return `${constant1}${constant2}`;
    }
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });

  return camelCaseText.join('');
};
