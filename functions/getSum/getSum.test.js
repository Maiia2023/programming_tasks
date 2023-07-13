import { getSum } from './getSum.js';

describe('getSum:',() => {
  it('unit test 1', () => { expect(getSum('5',5)).toEqual(undefined); }); 
  it('unit test 2', () => { expect(getSum(5,true)).toEqual(undefined); }); 
  it('unit test 3', () => { expect(getSum(-5,5)).toEqual(undefined); }); 
  it('unit test 4', () => { expect(getSum(5,-5)).toEqual(undefined); }); 
  it('unit test 5', () => { expect(getSum(5,0)).toEqual(undefined); }); 
  it('unit test 6', () => { expect(getSum(5.5,5)).toEqual(undefined); }); 
  it('unit test 7', () => { expect(getSum(5,5.5)).toEqual(undefined); }); 
  it('unit test 8', () => { expect(getSum(5.5,5.5)).toEqual(undefined); }); 
  it('unit test 9', () => { expect(getSum(0,0)).toEqual(undefined); }); 
  it('unit test 10', () => { expect(getSum(5,5)).toEqual(10); }); 
  it('unit test 11', () => { expect(getSum(2,2)).toEqual(4); });
});
