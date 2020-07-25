1 / 0; // Infinity
// Wait! WHAAAT?
// Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. It is a reference to Number.POSITIVE_INFINITY
// It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression of a number that's so big that overflows. This actually means there is no division by 0 errors in JavaScript, there is Infinity!
// There is also -Infinity which is mathematical negative infinity, and it's lower than any other value.
// To get -Infinity you negate Infinity, or get a reference to it in Number.NEGATIVE_INFINITY.
-(Infinity); // -Infinity
// Now let's have some fun with examples:
Infinity > 123192310293; // true
-Infinity < -123192310293; // true
1 / 0; // Infinity
Math.pow(123123123, 9123192391023); // Infinity
Number.MAX_VALUE * 2; // Infinity
23 / Infinity; // 0
-Infinity; // -Infinity
-Infinity === Number.NEGATIVE_INFINITY; // true
-0; // -0 , yes there is a negative 0 in the language
0 === -0; // true
1 / -0; // -Infinity
1 / 0 === 1 / -0; // false
Infinity + Infinity; // Infinity
var a = 0, b = -0;
a === b; // true
1 / a === 1 / b; // false
// Try your own!
