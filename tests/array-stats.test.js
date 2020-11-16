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

  test('test average string', () => {
    const average = arrayStats.average(["17","no se que onda",""]);
    expect(average).toBe(NaN);
  });

  test('test max', () => {
    const max = arrayStats.max([5,8,10]);
    expect(max).toBe(10);
  });

  test('test max empty', () => {
    const max = arrayStats.max([]);
    expect(max).toBeUndefined;
  });

  test('test max string', () => {
    const max = arrayStats.max(["17","no se que onda",""]);
    expect(max).toBe(NaN);
  });


});