const closestToZero = require('./index');

describe('test closestToZero function with basic exemple tests', () => {
  test('when input is [8, 5, 10] it must returns 5', () => {
    expect(closestToZero([8, 5, 10])).toEqual(5);
  });

  test('when input is [5, 4, -9, 6, -10, -1, 8] it must returns -1', () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toEqual(-1);
  });

  test('when input is [8, 2, 3, -2] it must returns 2', () => {
    expect(closestToZero([8, 2, 3, -2])).toEqual(2);
  });
});

describe('test closestToZero function with advanced tests', () => {
  test.each`
    a            | b            | result
    ${-1}        | ${1}         | ${1}
    ${-2}        | ${-3}        | ${-2}
    ${''}        | ${1}         | ${1}
    ${0}         | ${1}         | ${0}
    ${1}         | ${0}         | ${0}
    ${Infinity}  | ${0}         | ${0}
    ${1}         | ${Infinity}  | ${1}
    ${-Infinity} | ${-1}        | ${-1}
    ${-1}        | ${Infinity}  | ${-1}
    ${-Infinity} | ${0}         | ${0}
    ${undefined} | ${undefined} | ${0}
    ${0}         | ${NaN}       | ${0}
    ${'foo'}     | ${'bar'}     | ${0}
  `('should return $result when $a and $b are used', ({ a, b, result }) => {
    expect(closestToZero([a, b])).toEqual(result);
  });
});
