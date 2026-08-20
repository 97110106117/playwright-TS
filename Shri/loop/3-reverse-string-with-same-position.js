const input = "Anjali                 Singam";
//o/p = ilajnA magniS

//\s is a regular expression for space,+ is multiple spaces
let words = input.split(/\s+/); //0 = Anjali, 1=Singam

let revStr = "";

for(let i=0; i< words.length ; i++){
    let word = words[i];
    for(let j = (word.length-1); j >= 0 ; j--){
        revStr = revStr + word[j];
    } 
    revStr = revStr + " ";
}
console.log(revStr);
