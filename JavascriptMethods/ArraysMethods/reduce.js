let a=[0,1,2,3,4,5] // 15

let b=a.reduce((value ,index)=>{
    return value+index
})

console.log(b)

// The reduce() method executes a reducer function on each element of the array and returns a single output value.

let x=["my","name","is","Vijay"];
let y=x.reduce((ele,key)=>{
    return ele+key
})

console.log(y) //mynameisVijay
