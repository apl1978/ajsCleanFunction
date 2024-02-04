import healthStatus from '../game.js';

// test('test health status', () => {
//   const hero = {name: 'Маг', health: 90};
//   const expected = 'healthy';
//   const received = healthStatus(hero);
//
//   expect(received).toBe(expected);
// });

test.each([
  ['Маг', {name: 'Маг', health: 90}, 'healthy'],
  ['Мечник', {name: 'Мечник', health: 45}, 'wounded'],
  ['Лучник', {name: 'Лучник', health: 10}, 'critical'],
])(
  ('test health status for %s'),
   (_, hero, expected) => {
  const received = healthStatus(hero);

  expect(received).toBe(expected);

});
