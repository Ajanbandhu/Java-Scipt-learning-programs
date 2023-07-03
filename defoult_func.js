
//-----------------------------------------------------------------------------
          //------function with two parameter----------


    function sum(n1,n2)
    {
        return n1+n2;
    }
let result=sum(10,20)

console.log(result);

//-------------Function with  Defoult parameter-----------------------------

function displaymsg( msgToDisplay =" I am Monster")
{
    console.log(msgToDisplay)
}

displaymsg("i am so good");

displaymsg();

//--------------------------

function add(x=5,y=6)
{
    return x+y;
}

console.log(add(1)); 