# Exporting and Importing Modules as per Common-JS Module Format

### Exporting & Importing single funtion 'add' as per CommonJS Format
```
function add(a, b) {
    return a + b;
}

module.exports =  add;

const add = require("./functions/add");
```

### Exporting/Importing multiple functions as per CommonJS Format. You have option to rename function while exporting.
```
function add(a, b) {
    return a + b;
}

function addWihMultiply(a, b, c) {
  return (a + b) * c;
}

module.exports = {
   add: add,
   addMultiply: addWihMultiply
}
```