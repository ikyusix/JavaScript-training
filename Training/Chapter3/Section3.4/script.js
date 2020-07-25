// At first glance it may appear that null and undefined are basically the same, however there are subtle but important differences.
// undefined is the absence of a value in the compiler, because where it should be a value, there hasn't been put one, like the case of an unassigned variable.

// undefined is a global value that represents the absence of an assigned value.
// typeof undefined == 'undefined'

// null is an object that indicates that a variable has been explicitly assigned "no value".
// typeof null === 'object'

// Setting a variable to undefined means the variable effectively does not exist. Some processes, such as JSON serialization, may strip undefined properties from objects. In contrast, null properties indicate will be preserved so you can explicitly convey the concept of an "empty" property.

// The following evaluate to undefined:

// A variable when it is declared but not assigned a value (i.e. defined)
let foo1;
console.log('is undefined?', foo1 === undefined); // is undefined? true

// Accessing the value of a property that doesn't exist
let foo2 = { a: 'a' };
console.log('is undefined?', foo2.b === undefined); // is undefined? true

// The return value of a function that doesn't return a value
function foo3() { return; }
console.log('is undefined?', foo3() === undefined); // is undefined? true

// The value of a function argument that is declared but has been omitted from the function call
function foo4(param) {
    console.log('is undefined?', param === undefined);
}
foo4('a');
foo4();
// is undefined? false
// is undefined? true

// undefined is also a property of the global window object
// Only in browsers
console.log(window.undefined); // undefined
window.hasOwnProperty('undefined'); // true
