console.log("javascript - variable types")
/*
var vs let 
1. var is globally scoped --- let and const are block scoped
2. var can be updated and redeclared within its scope -- let can updated but not redeclared
3. const can neither updated nor be redeclared
4. var variable are initialized with undefined where as --- let and const variables are not initialized
5. const must be initialized during declaration unlike let and var
*/

var aa;
aa =  5;
let cc;
cc = 100;
console.log(aa);
console.log(aa);

//const must be initialized during declaration unlike let and var
//const name;
//name = "niraml"
const name = "Niraml"

var a = 10;
var a = "p"; // var can redeclare
var b = null;

var c = undefined;
var c = undefined;
var c = 6;
var c = "String";

var d = "Harry";
//let d = "harry"; //Identifier 'd' has already been declared // thrown error after runing code 

const author = "Peter";
//let author = 5; throws error bcz constant cant be change

console.log(a);  
console.log(b); 
console.log(c);  
console.log(d); 

//2. var can be updated and redeclared within its scope -- var is globally scoped
{
    var d = "this";
    console.log(d); //this
}
console.log(d);  //this

//-- let can updated but not redeclared -- let and const are block scoped 
{
    let d = "this";
    console.log(d); //this
}
console.log(d);  //Harry 

