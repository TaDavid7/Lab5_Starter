// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone number ', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('phone number with letters', () => {
  expect(isPhoneNumber('abcdefg')).toBe(false);
});
test('empty string ', () => {
  expect(isPhoneNumber('')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(isEmail('dtanioka@ucsd.edu')).toBe(true);
});
test('valid email', () => {
  expect(isEmail('hello@gmail.co')).toBe(true);
});
test('email missing @ ', () => {
  expect(isEmail('davidgmail.com')).toBe(false);
});
test('email missing .', () => {
  expect(isEmail('david@gmail')).toBe(false);
});

// isStrongPassword
test('valid password', () => {
  expect(isStrongPassword('NattyLol21')).toBe(true);
});
test('valid 4 character password', () => {
  expect(isStrongPassword('abc1')).toBe(true);
});
test('password starting with number', () => {
  expect(isStrongPassword('1password')).toBe(false);
});
test('password longer than 15 characters', () => {
  expect(isStrongPassword('abcdefghijklmnop')).toBe(false);
});

// isDate
test('valid date ', () => {
  expect(isDate('1/1/2026')).toBe(true);
});
test('valid date', () => {
  expect(isDate('12/25/2026')).toBe(true);
});
test('date with two-digit year', () => {
  expect(isDate('12/25/24')).toBe(false);
});
test('date with dashes', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

// isHexColor
test('valid 6 character hex color', () => {
  expect(isHexColor('#8f6f42')).toBe(true);
});
test('valid 3 character hex color', () => {
  expect(isHexColor('FFF')).toBe(true);
});
test('hex color with invalid characters', () => {
  expect(isHexColor('#YYYYYY')).toBe(false);
});
test('hex color with wrong length', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});
