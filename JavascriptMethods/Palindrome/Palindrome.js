  
/**
 * If a  string (or) number is read the same from forward or backward,it is know as Palindrome.
 * Checking Palindrome by using Split,reverse&Join Methods.
 * Author :Vijay
 */

let a="vijay";
let b=a.split("");
let c=b.reverse();
let d=c.join("")
console.log(d)

if(a===d){
    console.log("Yes it is palindrome :)")
}else{
    console.log("No it's not a Palindrome :(")
}



// by using Function :
function isNum (num) {
      let number = num.toString();
      let lowerCase = number.toLowerCase();
      let splitChar = lowerCase.split("");
      let plandromeChar = splitChar.reverse().join("")
      return plandromeChar == num
      
  }
  console.log(isNum("Vijay"))
