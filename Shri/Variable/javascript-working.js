/**
 * Global Execution Context 
 * 1. memory (variable env)
 * 2. code (thread of execution)
 */

 var x = 10;

 //function declaration
 function getMultiplication(hum){
    let multi = num * num;
    return multi;
 }
 var s1 = getMultiplication(x);   //100   //funciton invocation/ calling
 var s2 = getMultiplication(20);  //200

 console.log(s1);
 console.log(s2);

 //Call Stack/
 
// 3. EC2 (once execution is done, this EC2 is removed from stack)
// 2. EC1 (once execution is done, this EC1 is removed from Stack)
// 1. GEC (Global Execution Context)
