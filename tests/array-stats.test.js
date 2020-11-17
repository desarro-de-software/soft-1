const ArrayStats = require('../array-stats');
const arrayStats = new ArrayStats();

describe('tests for ArrayStats class', () => {
  
  test('test min happy case', () => {
    const min1 = arrayStats.min([6,232,256,3,12,26,24,1234,7,98]);
    expect(min1).toBe(3);
  });

  test('test min empty array', () => {
    const min2 = arrayStats.min([]);
    expect(min2).toBeUndefined;
  });

  test('test min string array', () => {
    const min2 = arrayStats.min(["a","0","12","string","23","-1","bla"]);
    expect(min2).toBe(NaN)
  });
});