'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';');
  const result = {};

  for (let i = 0; i < parts.length; i++) {
    const line = parts[i].trim();

    if (line === '') {
      continue;
    }

    const [key, value] = line.split(':');

    if (!key || !value) {
      continue;
    }
    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
