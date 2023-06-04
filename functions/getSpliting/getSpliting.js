/**
 * @function getSpliting
 * @param {number} a 
 * @param {number} b 
 * @returns {number | undefined}
 */

export const getSpliting = (a, b) => {
  const isValidA = typeof a === 'number' &&
    a > 0 &&
    a >= b &&
    Number.isInteger(a);

  const isValidB = typeof b === 'number' &&
    b > 0 &&
    Number.isInteger(b);

  if (!isValidA || !isValidB || !Number.isInteger(a/b)) return;

  return a / b;
};
