/**
 * @function getMultiply
 * @param {number} a 
 * @param {number} b 
 * @returns {number | undefined}
 */

export const getMultiply = (a, b) => {
  const isValida = typeof a === 'number' &&
    a > 0 &&
    Number.isInteger(a);

  const isValidb = typeof b === 'number' &&
    b > 0 &&
    Number.isInteger(b);

  if (!isValida || !isValidb) return;

  return a * b;
};
