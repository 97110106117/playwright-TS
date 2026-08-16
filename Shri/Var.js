// Variable - variable is a container used to store value

let name = "Anjali";
console.log(name);
/**
 let -  let is a keyword used to create variable
 name - variable name
 = - assignment operator
 Anjali - value
 */

//Rules for declaring variable
let age;
let getName;
let get_name;

/* Not allowed
let 1age;
let get-name;
let let;
let get name;
*/
// allowed
let $getName;
let _getName;

/* 
variable cannot start with number
$ and _ are allowed
no space in variable name
reserved keyword are not allowed
*/
//--------------------------------------------

// variable declaration
//1.var, 2.let and 3.const

//var can redeclare and update 
var salary;  // declaration
salary = 100; // initialization
var salary = 200; //declaration + initialization
var salary =  1000; // update value
console.log(salary);

//let cannot redeclare but can be updated 
let companyName = "Eminds";
//let campanyName = "Bitwise";  //Identifier 'campanyName' has already been declared throw runtime error
companyName = "Deloitte";
console.log(companyName);

//const cannot redeclare and updated
const DOB = "27-11";
//DOB = "27-03";
console.log(DOB); //Assignment to constant variable.

//-----------------------------------------------------------

//Scope
function getDetails(){
    var laptop = "Lenovo";
    console.log(laptop); // Lenovo
}
getDetails();
//console.log(laptop);


//Block scope
// var is not block scope 
//let and const are block scope
{
    var a = 398;
    let b = 10;
    const c = 20;

}
console.log(a); //398
console.log(b); // error
console.log(c); //error