//hosting in JS is a behaviour of moving variable and function declaration to the top of their scope before code run/execution

console.log(a1);  //undefined
var a1 = 100;

var a;
console.log(a);  // undefined
a = 200;
console.log(a); // 200 

// console.log(age); //Cannot access 'age' before initialization
// let age = 20;

// console.log(name);  ////Cannot access 'age' before initialization
// const name = "anjali";

//---------------- 1. Function Declaration Hoisting ------------
name(); // anjali 

function name(){     // function declaration
    console.log("Inside name function");
}
// funciton declaration are fully hoisted

//---------------- 2. Function Expression Hoisting ------------

num();  //TypeError: num is not a function

var num = function(){
    console.log("Inside var variable function");
}
//---------------- 3. Arrow Function Hoisting ------------------

nm(); //TypeError: num is not a function

var nm = () => {
    console.log("Inside Arrow Function");
} 
