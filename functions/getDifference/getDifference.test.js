import { getDifference } from './getDifference.js';

describe('getDifference:', () => {
  it('Unit test 1', () => { expect(getDifference('5', 5)).toEqual(undefined); });
  it('Unit test 2', () => { expect(getDifference(5, true)).toEqual(undefined); });
  it('Unit test 3', () => { expect(getDifference(-5, 5)).toEqual(undefined); });
  it('Unit test 4', () => { expect(getDifference(5, -5)).toEqual(undefined); });
  it('Unit test 5', () => { expect(getDifference(3, 5)).toEqual(undefined); });
  it('Unit test 6', () => { expect(getDifference(5, 3)).toEqual(2); });
  it('Unit test 7', () => { expect(getDifference (5, 5)).toEqual(0); });
  it('Unit test 8', () => { expect(getDifference(1.5, 5)).toEqual(undefined); });
  it('Unit test 9', () => { expect(getDifference (5, 5.5)).toEqual(undefined); });
});
