let a =[1,3,45,55,"ani","s",12]
console.log(a)
let b = new  Array("ani","s",3,45,55) 
console.log(b)

//-----------------------------------------------------------
console.log(a[14]) //not place in 14
console.log(a[4])
//-----------------------------------------------------------

let x=["aniket","ram","Lakhan","asus"]
console.log(x)

x.pop();
console.log(x)

x.shift("hmm");
console.log(x)

x.push();
console.log(x)

x.unshift("hmm");
console.log(x)
//----------------------------------------------------------

let a1=[1,2,3,4,5]
let a2=[6,7,8,9,0]

let a3=a1.concat(a2);
console.log(a3) 

let a5=a1.join(" -- ");
console.log(a5) 

a1.reverse();
console.log(a1) 

console.log(a2.indexOf(4)) 
