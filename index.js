function closestToZero(inputArray) {
  const filteredInput = inputArray.filter(item => !isNaN(parseInt(item)));

  if (!filteredInput || filteredInput.length === 0) {
    return 0;
  }

  return filteredInput.reduce(
    (prev, curr) =>
      curr === 0
        ? curr
        : curr > 0 && curr <= Math.abs(prev)
        ? curr
        : curr < 0 && -curr < Math.abs(prev)
        ? curr
        : prev,
    Infinity,
  );
}

module.exports = closestToZero;
