
/**
 *Remove Duplicates By Using Filter, map Method
 * Author: Vijay
 */
const arr = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}]

const ids = arr.map(o => o.id)
const filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))

console.log(filtered)


// duplicates//

let Names1 = [
   {pen:"red"},
   {pen:"red"},
   {pen:"black"},
   {pen:"green"},
   {pen:"blue"},    //black,green,blue
];

// Creates an array of objects with unique "name" property values.
let Array = [
    ...new Map(Names1.map((a) => [a["pen"], a])).values(),
];

console.log(Array); 

// 2nd method
let  students = [{name:"vijay"},{name:"ajay"},{name:"murali"},{name:"vijay"},
  
  ]
  const uniqueArr = [... new Set(students.map((data) => data.name))]
  console.log(uniqueArr)
