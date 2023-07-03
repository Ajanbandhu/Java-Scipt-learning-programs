function sumOfAllParameter()  //fun declaration
{
    let sum=0;
    for (var i=0;i<arguments.length;i++)sum += arguments[i];
    return sum;
}

//fun call

let result=sumOfAllParameter(1,2,3,4,5);
console.log(result);