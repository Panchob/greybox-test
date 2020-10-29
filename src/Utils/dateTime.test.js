import { dateTime } from './dateTime'

test('displays AM', () => {
  const date = new Date('October 28, 2020 03:24:00');
  expect( dateTime(date)).toBe('2020-10-28 3:24 AM')
});

test('displays PM and reformated hour', () => {
  const date = new Date('October 28, 2020 23:31:00');
  expect( dateTime(date)).toBe('2020-10-28 11:31 PM')
});

test('Displays minutes under 10 correctly', () => {
  const date = new Date('October 28, 2020 10:01:00');
  expect( dateTime(date)).toBe('2020-10-28 10:01 AM')
});

test('Displays midnight correctly', () => {
  const date = new Date('October 28, 2020 00:03:00');
  expect( dateTime(date)).toBe('2020-10-28 12:03 AM')
});

test('Works without providing a date', () => {
  expect(() => dateTime()).not.toThrow();
});