/**
 * Removing Duplicates By Using new Set Method and Index of Method.
 * Author :Vijay
 */

// Remove Duplicates in given Array
let x=[9,5,5,7,7,4,0,9,6,0];
let y=([... new Set(x)]);
console.log(y);



// Find The Dupliactes in given Arrays.
const a = [9,5,5,7,7,4,0,9,6,0];
const b = a => a.filter((item, index) => a.indexOf(item) !== index)
const c = b(a);
console.log(c);


