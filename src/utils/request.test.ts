import { parseUrlWithUrlParams } from './request';

it('parseUrlWithUrlParams should return valid url', (): void => {
  expect(
    parseUrlWithUrlParams('/v1/project/:id', {
      id: 1,
    }),
  ).toBe('/v1/project/1');
  expect(
    parseUrlWithUrlParams('/v1/project/:id/:id', {
      id: 1,
    }),
  ).toBe('/v1/project/1/1');
  expect(
    parseUrlWithUrlParams('/v1/project/:id/:name', {
      id: 1,
      name: 'test',
    }),
  ).toBe('/v1/project/1/test');
});
