 
  /**
  * Finding Smallest Number By using Sort Method,Math.min Method,ForLoop Method. 
 * Author :Vijay
 */
 let a=[10,11,15,0,12,14,22,1];// 0
 let b=a.sort((c,d)=>c-d);
 console.log(b[0]);
 
 // By Using Method
   let d=[10,1,2,3,5,4]
 let c=Math.min(...d)
 console.log(c)
 
 
 // By using For Loop;
 let x=[10,11,15,0,12,14,25,1]
 let y= x[0];
 
 for (let i=1; i<x.length; i++){
     if (x[i]<y) {
         y = x[i];
     }
 };
 console.log(y);


//  other Method
 let numbers = [ 25,15,35,40,20 ]

//  Find the second highest Number;

let secondHighestNum = arr  => arr.sort((a,b) => a-b)[1];

console.log(secondHighestNum(numbers))
