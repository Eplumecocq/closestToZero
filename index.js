function closestToZero(array) {
  const filtered = array.filter(item => !isNaN(parseInt(item)));
  if (!filtered || filtered.length === 0) return 0;
  return filtered.reduce(
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
