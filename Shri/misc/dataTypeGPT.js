// ------------ Primitive-------------

let num = null;    // object
let age = 32       // number
let name = "anjali"   // string
let isvalid = true   //boolean
let id = 1239n;    // bigint  - ans =>123n
let value = undefined    // undefined

console.log(typeof num)
console.log(typeof age)
console.log(typeof name)
console.log(typeof isvalid)
console.log(typeof value)
console.log(typeof id)

// ------------ Non-Primitive-------------

let arr = [10,20,30];         
let person = {
    name : "Anjali",
    age : 30
}

console.log(arr)         //[ 10, 20, 30 ]
console.log(typeof arr)    //object

console.log(person)         //{ name: 'Anjali', age: 30 }
console.log(typeof person)   //object