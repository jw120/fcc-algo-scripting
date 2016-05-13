function pairwise(xs, target) {

  // Find all pairs of indices which add to the target
  var i, j;
  var pairs = [];
  for (i = 0; i < xs.length; i++) {
    for (j = i + 1; j < xs.length; j++) {
      if (xs[i] + xs[j] === target) {
        pairs.push([i, j]);
      }
    }
  }

  // Sort pairs in ascending order of their sums
  pairs.sort(function (a, b) { return (a[0] + a[1]) - (b[0] + b[1]); });

  // Remove pairs that include an index used by previous pairs
  pairs = (pairs.reduce(function(acc, pair) {
    if (acc.indexOf(pair[0]) === -1 && acc.indexOf(pair[1]) === -1) {
      return acc.concat(pair);
    } else {
      return acc;
    }
  }, []));

  // Return sum of remaining pairs
  return pairs.reduce(function (acc, x) { return acc + x; }, 0);
}


// Tests

var tests = [
  pairwise([1, 4, 2, 3, 0, 5], 7) === 11,
  pairwise([1, 3, 2, 4], 4) === 1,
  pairwise([1, 1, 1], 2) === 1,
  pairwise([0, 0, 0, 0, 1, 1], 1) === 10,
  pairwise([], 100) === 0
];

console.log(tests);
