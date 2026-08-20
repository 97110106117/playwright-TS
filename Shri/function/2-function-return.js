console.log("---------return value----------");
function getAge(){
    console.log("Inside return function");
    return 30;
}
getAge();   //Inside return function

console.log("------to get return value store in variable-------------------");
let age = getAge();
 console.log(age);   //Inside return function,30

console.log("---Use of return value--------------------------------------");
 if(age > 18){
    console.log("Major");
 } else{
    console.log("Minor");    
 }

 console.log("----------console after return---------------------------");
function x(){
    return 10;
    console.log("After return statement");  
}
 x();                       // No output 

 console.log("---------------return value way---------------------------");
 function getMultiply(a,b) {
    return a*b;
 }
 let aa = getMultiply(10,20);
 console.log(aa);              //200

 console.log("-------function expression------------------------------");
 //whole function can store in single variable

 const added = function (){
    //code
 }
 console.log(added);   //[Function: added]  -- variable name became function name

 const div =  function(){
    //code
    return 10/10;
 }
 console.log(div());         //1
 
const multi = function() {
    console.log("inside function expression");
}
 multi();   //inside function expression

  console.log("-------  Arror function expression------------------------------");

  //nornal
  function square(num){
    return num*num;
  }

  // arrow
  const square = (num) => {
    return num * num;
  }
console.log(square(10));
