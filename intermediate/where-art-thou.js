//jshint esversion: 6

function hasPropertiesOf(a, b) {
  return Object.keys(b).every((prop) => a[prop] === b[prop]);
}

function where(arr, target) {
  return arr.filter((x) => hasPropertiesOf(x, target));
}
