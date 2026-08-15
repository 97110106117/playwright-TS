/*
Data types ===> 1. primitive 2. Non-primitive/objects
7 types of Primitive data types
1. Null
2. Number
3. Symbol
4. String
5. Boolen
6. Bigint
7. Undefined
*/

//nn ss bb u
let a = null;
let b = 9;
let c = Symbol("i am symbol");
let d = "Harry";
let e = true;
let f = BigInt("789");
//let g = undefined;
let g;
console.log(f)
console.log(a,b,c,d,e,f,g);
console.log(g) // undefined
console.log(typeof f); //bigint


//2.Non-Primitive data types /object
const items = {
    "name" : "Anjali",
    "Empid" : 1708,
    "working" : true,
    "status": undefined
}
console.log(items["name"]);