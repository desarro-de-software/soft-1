const ArrayStats = require('../array-stats');
const arrayStats = new ArrayStats();

describe('tests for ArrayStats class', () => {
  
  test('test average', () => {
    const avergage = arrayStats.average([1,2,2,3,1,2,2,1,3,3]);
    expect(avergage).toBe(2);
  });

});