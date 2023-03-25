Exporting and Importing Modules as per Common-JS Module Format

` Exporting single funtion 'add' as per CommonJS Format `
```
function add(a, b) {
    return a + b;
}

module.exports =  add;
```

`Importing single module using common-js format`
```
const add = require("./functions/add");
```

`Exporting multiple functions as per CommonJS Format. You have option to rename function while exporting.`
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