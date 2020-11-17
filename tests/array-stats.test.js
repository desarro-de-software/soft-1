const ArrayStats = require('../array-stats');
const arrayStats = new ArrayStats();

describe('tests for ArrayStats class', () => {
  
  test('test average', () => {
    const average = arrayStats.average([1,2,2,3,1,2,2,1,3,3]);
    expect(average).toBe(2);
  });
  
  test('test average empty', () => {
    const average = arrayStats.average([]);
    expect(average).toBeUndefined;
  });

  test('test max', () => {
    const max = arrayStats.max([5,8,10,2,4,1,7]);
    expect(max).toBe(10);
  });

  test('test max string', () => {
    const max = arrayStats.max(["17","no se que onda",""]);
    expect(max).toBe(NaN);
  });

  test('test max empty', () => {
    const max = arrayStats.max([]);
    expect(max).toBeUndefined;
  });

});