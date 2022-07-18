 /**
  *  Descending Order by Using Sort Method and For Loop 
 * Author :Vijay
 */

 //  Sort Method.
let a=[9,4,8,10,14,6,7,2,11,6];
let b=(a.sort((c,d)=>d-c));
console.log(b)

// Using For Loop 
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] < a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log( a);