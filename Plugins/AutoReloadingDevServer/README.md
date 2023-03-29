
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
- Adding devServer object in Webpack file with target folder
- To run webserver add following npm command in package.json "dev": "webpack serve --mode development --open",
- **IMPORTANT Manually Added CSS and Assets in dist folder to fix broken html page**

```
const path = require("path");
const HtmlWebpakPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    product: "./src/products.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: "./dist",
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
}
```