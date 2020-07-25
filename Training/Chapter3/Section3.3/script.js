// NaN stands for "Not a Number". When a mathematical function or operation in JavaScript cannot return a specific number, it returns the value NaN instead.
// It is a property of the global object, and a reference to Number.NaN

window.hasOwnProperty('NaN'); // true
NaN; // true

// Perhaps confusingly, NaN is still considered a number.
typeof NaN; // 'number'

// Don't check for NaN using the equality operator. See isNaN instead.
NaN == NaN // false
NaN === NaN // false