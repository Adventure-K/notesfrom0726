// ⭐️ control + tilda = open terminal in VS code
// ⭐️ hit up on your keyboard in the terminal to type the last thing you typed.
// ⭐️ the only thing is going to tell you things arent working in node is using console logs
// ⭐️ scroll up if you have an error. 
// ⭐️ node is just a way of running vhs tapes. 
// 🚫 can't do certain things b/c there is no DOM
// 🚫 ex: alert(); there is no jquery 
//⭐️ you can use template literal ${}

//this is where you want import access..
//require('path');
//./ is preferred way, if you don't it thinks there is a different type of code
// ../ go up a level and browse there.
// you can import many different files.
//two files don't talk to each other about variable names
//you can only import or export variables. not whole file.
//module.exports = addFive; ⭐️⭐️⭐️ you don't use the () in this function because you are not calling the function; you are only calling the name.  
//module.exports = function addFive(num){
//    return num + 5;
//}
let people = require('./people.js');

console.log('hello world!');
console.log(42);
console.log([1,2,3]);

function addFive(num){
    return num + 5;
}

addFive(3); //you don't see this
let sum = addFive(2);
let secret = addFive(sum);

console.log(secret);


for (i=0; i<students.length; i++){
    console.log('hello ', students[i]);
}
