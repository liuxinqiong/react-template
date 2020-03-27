import { toArray } from '@/frontend_utils/react/children';

it('should return empty array when children is undefined', (): void => {
  expect(toArray(undefined)).toEqual([]);
});

it('should return array when children is object', (): void => {
  expect(toArray(123)).toEqual([123]);
});

it('should return array when children is array', (): void => {
  expect(toArray([1, 2, 3])).toEqual([1, 2, 3]);
});
