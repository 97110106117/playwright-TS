//Function is a resusable block of code that performs a specific task and it is called/invoked whenever need

console.log(10*10);
console.log(20*10);
console.log(30*10);
// Redundancy

function multi(num) {
    let mul = num * num;
    return mul;
}
let m1 = multi(10);
let m2 = multi(20);

console.log(m1);

//-------------------------------------
// function definition
function  name(){
// writing something here
}

//fucntion calling 
name();

//-------------------Function with Params------------------

function addition(a,b){   // parameters
    let add = a + b;
    console.log(add);
}

addition(10,20);   // arguments -- 30

//-------------------------------------

//In JS their is no need of give any data type 
function additions(a,b){
    let add1 = a + b;
    console.log(add1);
    console.table([a,b]);
}
additions(10, "Anjali");  //10Anjali  -- concatination