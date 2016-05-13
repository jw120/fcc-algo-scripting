

function permAlone(s) {

  return permutations(s).filter(noRepeats).length;

}

// All permutations of the characters in the string
function permutations(s) {

  var perms = [""]; // All permutations built so far
  var i; // Index of character being added

  for (i = 0; i < s.length; i++) {

    var mappedPerms = perms.map(function (t) {

      return addCharEverywhere(s.charAt(i), t);

    });

    perms = flattenArray(mappedPerms);

  }

  return perms;

}


// Adds a character at every position to a string
// e.g., addCharEverywhere("X", "abc") gives ["Xabc", "aXbc", "abXc", "abcX"]
function addCharEverywhere(c, s) {

  var results = [];
  var i;

  for (i = 0; i <= s.length; i++) {

    results.push(s.substr(0, i) + c + s.substr(i));

  }

  return results;
}

// Combine arrays: flattenArray([[1,2],[3,4]]) gives [1,2,3,4]
function flattenArray(xxs) {

  var result = [];

  xxs.map(function(xs) {

    xs.map(function(x) {

      result.push(x);

    });

  });

  return result;

}


// True if the string contains no consecutive letters
function noRepeats(s) {

  var i;

  for (i = 0; i < s.length; i++) {

    if (i > 0 && s.charAt(i) === s.charAt(i - 1)) {

      return false;

    } else if (i < s.length - 1 && s.charAt(i) === s.charAt(i + 1)) {

      return false;

    }

  }

  return true;

}


// Tests

var tests = [
  typeof permAlone("aab") === "number",
  permAlone("aab") === 2,
  permAlone("aaa") === 0,
  permAlone("aabb") === 8,
  permAlone("abcdefa") === 3600,
  permAlone("abfdefa") === 2640,
  permAlone("zzzzzzzz") === 0,
  permAlone("a") === 1,
  permAlone("aaab") === 0,
  permAlone("aaabb") === 12
];


console.log(tests);
