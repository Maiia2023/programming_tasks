export const toCamelCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  const words = str.split(/[-_]/);
  const camelCaseText = words.map((word, index) => {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return camelCaseText.join('');
};
