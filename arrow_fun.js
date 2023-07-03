// one parameter, and a single return statement
 
 const square =x => x*x; 
console.log(square(7))


//----------------------------------------------------------------------------------

//  multiple statement ,and single return expression

const sum =(a,b) => a+b;
console.log(sum(7,7))

//__________________________________________________________________________________

// 
// multiplr statement is function expression
const add= (p,q) =>
{
    console.log( ` adding ${p} and ${q} `);
    return p+q;
};
let output3 =add(1,2);
console.log(output3)
//--------------------------------------------------------------------------------------------------------

// Return object

const SumandDiff =(m,n)=>
(
    {
        sum:m+n,diffrence:m-n
    }
);
let output4=SumandDiff(5,3); 
console.log(output4)