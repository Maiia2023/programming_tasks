/**
 * @function getSpliting
 * @param {number} a 
 * @param {number} b 
 * @returns {number | undefined}
 */

export const getSpliting = (a, b) => {
  const isValida = typeof a === 'number' &&
    a > 0 &&
    a >= b &&
    Number.isInteger(a);

  const isValidb = typeof b ==='number' &&
    b > 0 &&
    Number.isInteger(b);

  if (!isValida || !isValidb || !Number.isInteger(a/b)) return;

  return a / b;
};
