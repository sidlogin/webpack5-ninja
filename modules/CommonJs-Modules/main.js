// const add = require("./functions/add");
// const {add, addMultiply} = require("./functions/add");
// const {add, addWihMultiply} = require("./functions/add");
// const {add, subtract} = require("./functions");
const {add: addNumbers, subtract} = require("./functions");

function add(a,b) {
    return a+b;
}

const output1 = add(1, 2);
console.log(output1);

const output2 = subtract(10, 2);
console.log(output2);


const output3 = addNumbers(11, 2);
console.log(output3);