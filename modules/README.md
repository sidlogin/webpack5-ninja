# Exporting and Importing Modules as per Common-JS Module Format
```
function add(a, b) {
    return a + b;
}

function addWihMultiply(a, b, c) {
  return (a + b) * c;
}

```
## Exporting & Importing Modules

### Single function 'add' as per CommonJS Format
```
module.exports =  add;

const add = require("./functions/add");
```

### Multiple functions as per CommonJS Format. You have option to rename function while exporting.
```
module.exports = {
   add: add,
   addMultiply: addWihMultiply
}

const {add, addMultiply} = require("./functions/add");

```

### Multiple functions using shortcut way if your want to keep similar name as per actual function names using CommonJS Format
```
module.exports = {
  add,
  addWihMultiply
}

const {add, addWihMultiply} = require("./functions/add");

```