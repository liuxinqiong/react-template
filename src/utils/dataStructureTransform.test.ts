import { translateArrayToByIdObject } from '@/frontend_utils/dataStructureTransform';

it('should return right object', (): void => {
  expect(
    translateArrayToByIdObject([
      {
        id: 1,
        name: 'test1',
      },
      {
        id: 2,
        name: 'test2',
      },
    ]),
  ).toEqual({
    1: {
      id: 1,
      name: 'test1',
    },
    2: {
      id: 2,
      name: 'test2',
    },
  });
});
