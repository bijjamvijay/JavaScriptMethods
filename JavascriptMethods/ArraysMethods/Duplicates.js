/**
 * Removing Duplicates By Using new Set Method and Index of Method.
 * Author :Vijay
 */

// Remove Duplicates in given Array
let x=[9,5,5,7,7,4,0,9,6,0];
let y=([... new Set(x)]);
console.log(y);



// Removeing Dupliactes in given Arrays.
const a = [9,4,9,1,4,6,7,2,1,1];
const b =  a.filter((item, index) => a.indexOf(item) == index)
console.log(b);


// [ 9, 4, 1, 6, 7, 2 ]  === Duplicates


