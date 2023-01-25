function stringLength(string) {
  let stringLength = string.length;

  if (stringLength < 1) {
    throw new Error('String length is less than 1');
  } else if (stringLength > 10) {
    throw new Error('String length is greater than 10');
  } else {
    return stringLength;
  }
}

module.exports = stringLength;