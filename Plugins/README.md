# Implementation of Multiple bundles using Plugins.

1. Adding Multiple Entries points in Webpack for multiple bundlers 
2. Adding HTMLWebpackPlugin in Webpack
3. Adding WebpackServer in Webpack

## Basic Webpack:
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

