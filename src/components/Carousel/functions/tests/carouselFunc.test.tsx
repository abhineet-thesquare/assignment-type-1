import { getIsIndexValid } from '../carouselFunc';

test('getIsIndexValid() - Return true if index is in the valid range', () => {
  expect(getIsIndexValid(3, 7)).toEqual(true);
});

test('getIsIndexValid() - Return false if index is below minimum of 0', () => {
  expect(getIsIndexValid(-7, 3)).toEqual(false);
});

test('getIsIndexValid() - Return false if index is above maximum index from param', () => {
  expect(getIsIndexValid(9, 7)).toEqual(false);
});
