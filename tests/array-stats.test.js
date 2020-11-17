const ArrayStats = require('../array-stats');
const arrayStats = new ArrayStats();

describe('tests for ArrayStats class', () => {
  
  test('test min happy case', () => {
    const min1 = arrayStats.min([6,232,256,3,12,26,24,1234,7,98]);
    expect(min1).toBe(3);
  });

  test('test average', () => {
    const average = arrayStats.average([1,2,2,3,1,2,2,1,3,3]);
    expect(average).toBe(2);
  });

  test('test min happy case', () => {
    const min1 = arrayStats.min([6,232,256,3,12,26,24,1234,7,98]);
    expect(min1).toBe(3);
  });

  test('test average string', () => {
    const average = arrayStats.average(["17","no se que onda",""]);
    expect(average).toBe(NaN);
  });
  
  test('test min empty array', () => {
    const min2 = arrayStats.min([]);
    expect(min2).toBeUndefined;
  });

  test('test average empty', () => {
    const average = arrayStats.average([]);
    expect(average).toBeUndefined;
  });

  test('test max', () => {
    const max = arrayStats.max([5,8,10,2,4,1,7]);
    expect(max).toBe(10);
  });

  test('test max empty', () => {
    const max = arrayStats.max([]);
    expect(max).toBeUndefined;
  });

  test('test min empty array', () => {
    const min2 = arrayStats.min([]);
    expect(min2).toBeUndefined;
  });

  test('test median best', () => {
    const mediann = arrayStats.median([1,2,2,3,1,2,2,1,3,3,]);
    expect(mediann).toBe(2);
  });

  test('test median empty', () => {
    const mediann = arrayStats.median([]);
    expect(mediann).toBeUndefined;
  });
/*
  test('test median string', () => {
    const mediann = arrayStats.median(['aaaaa','12', ,'impar','esto es un string','stronk']);
    expect(mediann).toBe("12");
  });
*/
  test('test median string and numbers', () => {
    const mediann = arrayStats.median(['aaaaa',2,'12',4]);
    expect(mediann).toBe(3);
  });

  test('test average empty', () => {
    const average = arrayStats.average([]);
    expect(average).toBeUndefined;
  });

  test('test average string', () => {
    const average = arrayStats.average(["17","no se que onda",""]);
    expect(average).toBe(NaN);
  });
  
  test('test average empty', () => {
    const average = arrayStats.average([]);
    expect(average).toBeUndefined;
  });

  test('test max', () => {
    const max = arrayStats.max([5,8,10,2,4,1,7]);
    expect(max).toBe(10);
  });

  test('test max empty', () => {
    const max = arrayStats.max([]);
    expect(max).toBeUndefined;
  });

});