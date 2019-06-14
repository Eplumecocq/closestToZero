const closestToZero = require('./index');

describe('test closestToZero function', () => {
  it.each`
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
