let obj={id:221, name:"aniket",salary:1000 };//obj creation

let emp=new Object();//obj creation
emp.id=102;
emp.name="sam";


console.log(emp)

console.log(obj);


//---------------------------

function Emp(i, n, s)
{
    this.id=i;
    this.name=n;
    this.salary=s;

}

const e = new Emp(103,"ani",12000);
console.log(e);
//----------------------------------
console.log(emp.id); // using . operator

console.log(emp['name']) //using sqr method

emp["salary"]=13000; //update
console.log(emp)

delete emp.id  //delete

console.log(emp)
