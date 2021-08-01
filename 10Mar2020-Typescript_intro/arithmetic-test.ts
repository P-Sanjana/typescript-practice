import  {Addition, Substraction} from "./arithmetic-module";  
import {Multiplication, sum} from "./arithmetic-module";

let addObject = new Addition(50, 20);   
let subObject = new Substraction(40, 10);  
let mulObject = new Multiplication(20, 30);  
addObject.sum();  
subObject.difference();
mulObject.product();  
console.log("sum(): " + sum(50, 100));