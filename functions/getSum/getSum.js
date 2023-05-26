/**
 * @function getSum
 * @param {number} a 
 * @param {number} b 
 * @returns {number | undefined}
 */

export const getSum = (a, b) => {
  const isValidA = typeof a === 'number' &&
    a > 0 &&
    Number.isInteger(a);

  const isValidB = typeof b === 'number' &&
    b > 0 &&
    Number.isInteger(b);

  if (!isValidA || !isValidB) return;

  return a + b;
};
