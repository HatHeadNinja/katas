let re1 = /ab+c/; //?

let re2 = new RegExp('ab+c'); //?

let myRe = /d(b+)d/g;
let myArray = myRe.exec('bbbbbbbddddcdbbdbsbdz'); //?

myArray[1]; //?

// find space
 let phrase = / /g;
 let space = phrase.exec('Hello World!'); //?

 
// find word

// respell word
