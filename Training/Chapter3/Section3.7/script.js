// Mathematical operations on values other than numbers return NaN.
let a = "b" * 3;
let b = "cde" - "e";
let c = [1, 2, 3] * 2;

// An exception: Single-number arrays.
let d = [2] * [3] // Returns 6

// Also, remember that the + operator concatenates strings.
let e = "a" + "b" // Returns "ab"

// Dividing zero by zero returns NaN.
let f = 0 / 0 // NaN

//Note: In mathematics generally (unlike in JavaScript programming), dividing by zero is not possible.
