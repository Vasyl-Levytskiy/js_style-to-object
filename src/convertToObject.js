'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .reduce((parsedStyles, line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex === -1) {
        return parsedStyles;
      }

      const rawKey = line.slice(0, colonIndex).trim();
      const rawValue = line.slice(colonIndex + 1).trim();

      if (!rawKey) {
        return parsedStyles;
      }

      parsedStyles[rawKey] = rawValue;

      return parsedStyles;
    }, {});
}

module.exports = convertToObject;
