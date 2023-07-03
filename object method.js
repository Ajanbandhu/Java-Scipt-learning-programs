let emp=
{
    id:1,
    name:"Aniket",
    age:22
};

let keys=Object.keys(emp); // extract in array form
console.log(emp);

let values=Object.values(emp); // extract value in arr
console.log(values)

let entires=Object.entries(emp); //array with name
console.log(entires);

emp.id=1111;  //update
console.log(emp)

// Object.freeze(emp);     // Freeze 
// emp.id=232451;  //update
// console.log(emp)

Object.seal(emp);     // seal obj 
emp.id=232451;  //update
console.log(emp)

emp.address='random'; //add variable
console.log(emp)
//-------------------------------

let o =Object.assign({x:17},emp)
console.log(o)
