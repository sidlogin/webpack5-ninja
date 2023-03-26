# Exporting and Importing Modules as per Common-JS Module Format
```
function add(a, b) {
    return a + b;
}

function addWihMultiply(a, b, c) {
  return (a + b) * c;
}

```
## Exporting & Importing Modules as per CommonJS Format

### Single function 'add' 
```
module.exports =  add;

const add = require("./functions/add");
```

### You have option to rename function while exporting multiple functions .
```
module.exports = {
   add: add,
   addMultiply: addWihMultiply
}

const {add, addMultiply} = require("./functions/add");

const output1 = add(1, 2);
console.log(output1);

```

### Shortcut way as per actual function names for multiple functions 
```
module.exports = {
  add,
  addWihMultiply
}

const {add, addWihMultiply} = require("./functions/add");

const output1 = add(1, 2);
console.log(output1);

const output2 = addWihMultiply(10, 2, 5);
console.log(output2);

```

### Use alias while importing modules, in below example we have local function with same module name which we exporting on top, to avoid this conflict we have used alias concept so we can use all imported and local modules.
```
module.exports = {
  add,
  addWihMultiply
}

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

```