
// Arrays and Objects
var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingOut = ["toyota", "ferrari", "lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 18, 23, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.15];

console.log(favoriteFruits);
console.log(carsInParkingOut);
console.log(employees);
console.log(primeNumbers);
console.log(randomVariables);

myArray = ["zero", "one", "two"];
console.log(myArray[0]);

myArray = ["John Doe", "Billy"];
elementNumber = 1;

console.log(myArray[elementNumber]);

// An object is a group of values; unlike arrays, we can do something better than them:

myObject = {};
john = {firstName: "John", lastName: "Doe", fullName: "John Doe"};
billy = {
    firstName: "Billy",
    lastName: undefined,
    fullName: "Billy"
};
console.log(john.fullName);
console.log(billy.firstName);

// Rather than making an array ["John Doe", "Billy] and calling myArray[0], we can just call john.fullName and billy.fullName
