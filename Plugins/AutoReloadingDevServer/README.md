
# Implementation of Webpackplugin in Webpack.js.
- install the webpack-dev-server npm  

## Basic Webpack:

```
const path = require("path");
const HtmlWebpakPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: "./src/index.js",
    product: "./src/products.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
},
plugins: [
  new HtmlWebpakPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    chunks: ["index"],
    inject: true,
    filename: "index.html"
  }),
  new HtmlWebpakPlugin({
    template: path.resolve(__dirname, "src/products.html"),
    chunks: ["product"],
    inject: true,
    filename: "products.html"
  })
]

```
### After adding plugin: 

```
const path = require("path");
const HtmlWebpakPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: "./src/index.js",
    product: "./src/products.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
},
plugins: [
  new HtmlWebpakPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    chunks: ["index"],
    inject: true,
    filename: "index.html"
  }),
  new HtmlWebpakPlugin({
    template: path.resolve(__dirname, "src/products.html"),
    chunks: ["product"],
    inject: true,
    filename: "products.html"
  })
]
```