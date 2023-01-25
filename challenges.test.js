// string length

const stringLength = require('./stringLength');

test('Returns number of strings if string is between 1-10', () => {
  expect(stringLength('abc')).toBe(3);
});

test('Throw error if string length is less than 1', () => {
  expect(() => stringLength('')).toThrow(Error);
});

test('Throw error if string length is greater than 10', () => {
  expect(() => stringLength('abcdefghijklmno')).toThrow(Error);
});

// reverse string

const reverseString = require('./reverseString');

test('Reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

// calculator

const calculator = require('./calculator');
const calc = new calculator();

describe('calculator', () => {
  test('add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test('substract two numbers', () => {
    expect(calc.substract(2, 1)).toBe(1);
  });
  test('divide two numbers', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });
  test('multiply two numbers', () => {
    expect(calc.multiply(1, 5)).toBe(5);
  });
});

// capitalize string

const capitalize = require('./capitalize');

test('Return string with first letter capitalize', () => {
  expect(capitalize('abc')).toBe('Abc');
});