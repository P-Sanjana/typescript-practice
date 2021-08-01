// Simple Anonymous function
var msg = function () {
    return "hello world";
}
console.log(msg())

//Anonymous function with parameters
var res = function (a: number, b: number) {
    return a * b;
};
console.log(res(12, 2))

/* There are 3 parts to a Lambda function −
Parameters − A function may optionally have parameters
The fat arrow notation / lambda notation(=> ) − It is also called as the goes to operator
Statements − represent the function’s instruction set 
*/

// Simple Lambda Expression
var foo1 = (x: number) => 10 + x
console.log(foo1(100))      //outputs 110 

// Lambda Statement
var foo2 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 foo2(100)

 // no datatype for parameter, 'any' is assigned as the datatype
 var func = (x)=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("Tom")

// optional paranthesis for functions with single argument
var display = x=> { 
    console.log("The function got "+x) 
 } 
 display(12)

 //Optional braces for a single statement, Empty parentheses for no parameter

 var disp =()=> { 
    console.log("Function invoked"); 
 } 
 disp();

 