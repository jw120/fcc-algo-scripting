// Very manual object system, hiding instance variables inside a closure

var Person = function (n) {

  var createdObject = this; // capture this as new will set its prototype

  return function () {

    var firstName;
    var lastName;

    var setNames = function(n) {
      var names = n.split(" ");
      firstName = names[0];
      lastName = names[1];
    };

    setNames(n);

    createdObject.getFirstName = function () { return firstName; };
    createdObject.getLastName = function () { return lastName; };
    createdObject.getFullName = function () { return firstName + " " + lastName; };
    createdObject.setFirstName = function (n) { firstName = n; };
    createdObject.setLastName = function (n) { lastName = n; };
    createdObject.setFullName = function (n) { setNames(n); };

    return createdObject;

  }();

};


// Tests

var p = new Person("John Smith");
var bob = new Person("Bob Ross");
var tests = [
  p.getFirstName() === "John",
  p.getLastName() === "Smith",
  p.getFullName() === "John Smith",
  function () { p.setFirstName("Jim"); return p.getFullName() === "Jim Smith"; }(),
  function () { p.setLastName("Brown"); return p.getFullName() === "Jim Brown"; }(),
  function () { p.setFullName("Eve Too"); return p.getFullName() === "Eve Too"; }(),
  Object.keys(bob).length === 6,
  bob instanceof Person === true,
  bob.firstName === undefined,
  bob.lastName === undefined,
  bob.getFirstName() === "Bob",
  bob.getLastName() === "Ross",
  bob.getFullName() === "Bob Ross",
  function () { bob.setFirstName("Haskell"); return bob.getFullName() === "Haskell Ross"; }(),
  function () { bob.setLastName("Curry"); return bob.getFullName() === "Haskell Curry"; }(),
  function () { bob.setFullName("Haskell Curry"); return bob.getFullName() === "Haskell Curry"; }(),
  function () { bob.setFullName("Haskell Curry"); return bob.getFirstName() === "Haskell"; }(),
  function () { bob.setFullName("Haskell Curry"); return bob.getLastName() === "Curry"; }()
];

console.log(tests);
