function sym() {

  var arrays = Array.prototype.slice.call(arguments);
  var sets = arrays.map(toSet);

  return sets.reduce(symPair, []);

}

// Sort an array and remove duplicates
function toSet(a) {

  return a.sort().reduce(function (acc, val) {

    if (acc === [] || val !== acc[acc.length - 1]) {

      acc.push(val);
      return acc;

    } else {

      return acc;
    }
  }, []);

}

// Return the symmetric difference of two sorted arrays without duplicates
function symPair (xs, ys) {

  return xs.concat(ys).sort().filter(function (x, i, a) {

    if (i === 0) {

      return a.length === 1 || x !== a[1];

    } else if (i === a.length - 1) {

      return x !== a[i - 1];

    } else {

      return  x !== a[i - 1] && x !== a[i + 1];

    }

  });

}


// Tests

var tests = [
  [ [[1, 2, 3], [5, 2, 1, 4]], [3, 4, 5]],
  [ [[1, 2, 3], [5, 2, 1, 4]], [3, 4, 5]],
  [ [[1, 2, 5], [2, 3, 5], [3, 4, 5]], [1, 4, 5]],
  [ [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]], [1, 4, 5]],
  [ [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]], [2, 3, 4, 6, 7]],
  [ [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]], [1, 2, 4, 5, 6, 7, 8, 9]]
];

tests.map(function(test) {

  var args = test[0];
  var expected = test[1];
  var result = sym.apply(null, args);

  if (shallowArrayEqual(result, expected)) {

    console.log("OK", args);

  } else {

    console.log(args, "Failed. Expected ", expected, "got", result);

  }

});

function shallowArrayEqual(xs,ys) {

  return xs.length === ys.length && xs.every(function (x, i) {

    return x === ys[i];

  });

}
