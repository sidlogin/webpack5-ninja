# Implementation of Multiple Entry points in Webpack.js.
- Adding Multiple Entries points in Webpack for multiple bundlers 

## Basic Webpack:

```
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
```
### After adding multiple entries: 

```
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    product: "./src/products.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
}
```

- Webpack used multiple entry for Index and Product Pages
- Output using [name] variable to generate different bundler name