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

```

### Shortcut way as per actual function names for multiple functions 
```
module.exports = {
  add,
  addWihMultiply
}

const {add, addWihMultiply} = require("./functions/add");

```