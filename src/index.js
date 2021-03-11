
exports.min = function min (array) {
  const arrMin = Math.min.apply(null, array);
  return array == undefined || !array.length ? 0 : arrMin
}

exports.max = function max (array) {
  const arrMax = Math.max.apply(null, array);
  return array == undefined || !array.length ? 0 : arrMax
}

exports.avg = function avg (array) {
    return array == undefined || !array.length ? 0 : array.reduce((sum, current) => (sum + current)) / array.length;
}
