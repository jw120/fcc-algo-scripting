// Applying Kepler's Third Law

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(function (dat) {

    var r = earthRadius + dat.avgAlt;

    return {
      name: dat.name,
      orbitalPeriod: Math.round (2 * Math.PI * Math.sqrt(Math.pow(r, 3) / GM))
    };
  });
}

// Tests

var tests = [
  deepEqual(
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]),
    [{name: "sputnik", orbitalPeriod: 86400}]),
  deepEqual(
    orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]),
    [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}])
];

console.log(tests);

function deepEqual(xs, ys) {

  if (Array.isArray(xs)) {

    return Array.isArray(ys) && xs.length === ys.length && xs.every(function (x, i) { return deepEqual(x, ys[i]); });

  } else if (typeof xs === "object") {

    return typeof ys === "object" && Object.keys(xs).length === Object.keys(ys).length && Object.keys(xs).every(function (k) { return deepEqual(xs[k], ys[k]); });

  } else {

    return xs === ys;

  }
}
