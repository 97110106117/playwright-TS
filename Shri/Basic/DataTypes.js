//Number, String, Boolean, Undefined, Null, BigInt

var age = 10;  
console.log(typeof age);   //number

var name = "Anjali";
console.log("return type = " + typeof name);  //String 

let isValidForVoting = true;
console.log(typeof isValidForVoting);    // boolean

let results;
console.log(results);  //undefined  
console.log(typeof results);  //undefined  

let num = null;
console.log(num);   //null
console.log(typeof num);  // object

let bigValue = 1234567890n;     //give 'n' 
console.log(typeof bigValue);   //bigint  

//--------------------------------------------------------
//Non - Primitive data type

//object
let employee = {
    name: "Harry",
    age: 30,
    salary: null
}
//types of writing style
console.log(employee);    //{ name: 'Harry', age: 30, salary: null }
console.log(typeof employee);   // object
console.log(employee.age);   //30
console.log(employee["name"]);   //Harry

//Array
let number = [10,20,30,40,50];

console.log(number);    //[ 10, 20, 30, 40, 50 ]
console.log(typeof number);  //object
console.log(number[0]);  // 10

//--------------------------------------------------------
//function
function details() {
    console.log("Getting the details");
}
function details1() {
    console.log("Getting the details");
    return 10;
}function details3() {
    console.log("Getting the details");
    return 10;
}
console.log(typeof details);        //funciton
console.log(typeof 10);             //number
console.log(typeof details());      //Getting the details , Undefined


