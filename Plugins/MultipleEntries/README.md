# Implementation of HTMLWwbpackplugin in Webpack.js.
- install the html-webpack-plugin npm  

## Basic Webpack:

```
const path = require('path');

const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    product: "./src/products.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")

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
  new HtmlWebpakPlugin({})
]
```
- it simple generates the html file in Dist folder
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Webpack App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script defer src="index.bundle.js"></script>
  <script defer src="product.bundle.js"></script>
</head>

<body>
</body>
</html>
```
- Currently it simple generate basic HTML template and not copying the actual content of index.html from source folder.
- To fix that we should have following configuration for HTML Webpack Plugin
- HTMLWebpackPlugin entries depends on number of pages of your application. In current case we have two pages 'Index' and 'Products'
- Webpack doesn't really know resolving HTML filename and by default it giving the filename as index.html for each html-webpack entry. Since we have two HTML plugins with same type so it giving same index.html for both. To handle this issue, simple add filename for each entry.
  

```
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
