//jshint esversion: 6

function unite(arrays) {
  "use strict";
  let acc = [];
  let args = Array.prototype.slice.call(arguments);
  args.forEach((arr) => {
    arr.forEach((x) => {
      if (acc.indexOf(x) === -1) {
        acc.push(x);
      }
    });
  });
  return acc;
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));
