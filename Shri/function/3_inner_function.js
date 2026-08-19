 console.log("------------ inner function ------------------------------");
 function outer(){
    console.log("outer");
    function inner(){
        console.log("inner function");
    }
    inner();       // No output
 }
 outer();           // outer,    inner function

// 1. 1st call outer() and print "outer"
// 2. outer didnt called inner so it will come down to 7 line
// 3. then 2nd call inner() and print "inner function"