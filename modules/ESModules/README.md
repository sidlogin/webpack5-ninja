# Exporting and Importing Modules as per ES6 Format
```
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
  return (a - b);
}

```
## Exporting & Importing Modules as per ES6 Format

### Single function 'add' 
```
export default add;

import add from "./functions/add";

const output1 = add(1, 2);
console.log(output1);
```

### Exporting multiple functions.
```
export { add, subtract };

import {add, subtract} from "./functions";

const output1 = add(1, 2);
console.log(output1);
```

### Import modules using alias 
```
export { add, subtract };

import * as $ from "./functions";

const output1 = $.add(1, 2);
console.log(output1);

```