// string length

const stringLength = require('./stringLength');

test('Returns number of strings if string is between 1-10', () => {
  expect(stringLength("abc")).toBe(3);
});

test('Throw error if string length is less than 1', () => {
  expect(() => stringLength("")).toThrow(Error);
});

test('Throw error if string length is less than 1', () => {
  expect(() => stringLength("abcdefghijklmno")).toThrow(Error);
});

// reverse string

const reverseString = require('./reverseString');

test('Reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});