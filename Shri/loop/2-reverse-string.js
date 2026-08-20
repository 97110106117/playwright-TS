console.log("-----reverse string ----------------");

const str = "Umanjali";
let revStr1 = "";
console.log("--------Using charAt() ----------------");
for(let j = (str.length - 1); j>=0 ; j--){
    revStr1 = revStr1 + str.charAt(j);
}
console.log(revStr1);                             //ilajnamU

console.log("--------Using str[]----------------");
let reverseStr ="";
for(let k = (str.length-1); k>=0 ; k--) {
    reverseStr = reverseStr + str[k];
}
console.log(reverseStr);






console.log("-----reverse string explanation-----------------");

const name = "Umanjali";
//output = ilajnamU
//i=0, l=1,-----, U=7
// console.log(name.charAt(7)); //i
// console.log(name.charAt(6)); //l
// console.log(name.charAt(5)); //a -----

// console.log(name.length);  //8 -1 = 7

let revStr= "";

for(let i = (name.length-1); i >= 0; i--){
  //console.log(name.charAt(i));  // i  
                                 // l --- U single char come every next line, so use revstr to store on same line
  //revStr = name.charAt(i);
  revStr = revStr + name.charAt(i);

}
//console.log(revStr);   //give only 'U' bcx its not giving old store value need to append --revStr = name.charAt(i);

console.log(revStr);              //ilajnamU


