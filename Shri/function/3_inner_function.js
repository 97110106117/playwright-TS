 console.log("------------ inner function ------------------------------");
 function outer(){
    console.log("outer");
    function inner(){
        console.log("inner function");
    }
    inner();       // No output
 }
 outer();           // outer,    inner function

