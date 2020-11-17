const ArrayStats = require('../array-stats');
const arrayStats = new ArrayStats();

describe('tests for ArrayStats class', () => {
  
/*El console log no muestra que agarra los arrays impares, no se sabe bien como funciona el ordenamiento*/
  test('test median best', () => {
    const mediann = arrayStats.median([1,2,2,3,1,2,2,1,3,3,]);
    expect(mediann).toBe(2);
  });

  test('test median empty', () => {
    const mediann = arrayStats.median([]);
    expect(mediann).toBeUndefined;
  });

  test('test median string', () => {
    const mediann = arrayStats.median(['aaaaa','12', ,'impar','esto es un string','stronk']);
    expect(mediann).toBe("12");
  });

  test('test median string and numbers', () => {
    const mediann = arrayStats.median(['aaaaa',2,'12',4]);
    expect(mediann).toBe(3);
  });

});