// The Number constructor has some built in constants that can be useful
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_VALUE; // 5e-324
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON; // 0.0000000000000002220446049250313
Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity
Number.NaN; // NaN
// In many cases the various operators in JavaScript will break with values outside the range of (Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
// Note that Number.EPSILON represents the different between one and the smallest Number greater than one, and thus the smallest possible difference between two different Number values. One reason to use this is due to the nature of how numbers are stored by JavaScript see Check the equality of two numbers