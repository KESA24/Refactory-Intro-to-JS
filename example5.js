//Conditions and Loops under functions

//a function is a group of statements  that peform a given task and have a given name

//Function definition
function addNum(){
    const num1 = 2, num2=4;
    let sum = num1+num2;

    console.log(sum);
}

//{} -brace; ()- parenthesis
//A function will not run until we call it
//{function definition}

// calling a function / function invoketion
//addNum();

//Another way of function definition
function addNum2( num1, num2){
   const addition = num1+num2;
   console.log (addition);
}

addNum2(5,8);
addNum2(20,27)