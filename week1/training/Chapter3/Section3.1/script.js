// Null

null == undefined; // true
null === undefined; // false

// CAREFUL: The typeof null is 'object';
typeof null; // object

// to properly check if a value is null, compare it with the strict equality of operator
var a = null;
a === null; // true


