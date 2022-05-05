import { isValidHttpUrl } from '../src/client/js/formValidation';

test('validate strings', () => {
  expect(isValidHttpUrl('')).toBe(false);
  expect(
    isValidHttpUrl(
      'https://www.theguardian.com/world/2022/apr/23/russia-ukraine-war-what-we-know-on-day-59-of-the-invasion'
    )
  ).toBe(true);
  expect(
    isValidHttpUrl(
      'hts://www.theguardian.com/world/2022/apr/23/russia-ukraine-war-what-we-know-on-day-59-of-the-invasion'
    )
  ).toBe(false);
});
