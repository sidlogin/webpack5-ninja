# Webpack CSS Loaders
In order use this first we should generate bundle.js using webpack command given below, we can achieve it with the help of any two below commands:
- npm run build
- npx webpack --config webpack.config.js --mode development 


## Webpack Documentation:
https://webpack.js.org/Loaders

### Loader configuration for Webpack:
- install the style-loader and css-loader npm packages

We can config multiple loaders under module attribute. For each loaders modules has rules property as below:

- Rules can have multiple objects and it has two properties 'test' & 'use'.
- 'test' attribute only accepts Regex (Regular Expression) .
- 'use' accepts only loader definition in form of array . You can pass loaders like ["style-loader", "css-loader"]. Important point here to be noted is that, the order of loaders. whenever loaders will be executed then it will starts from right to left, so 'css-loader' will be executed first and then 'style-loader'.
-  Behind the scene what CSS loader does? It helps of resolve CSS dependency in any JS file. Here whenever the index.js will be encoutered and it finds the import of index.css then it resolve this dependency. Once it loaded the dependency then it doesn't really know what to do with doing it, so it pass CSS data to the 'style-loader'. The 'style-loader' takes all the data processed by 'css-loader' and loads in to the html document. So it going to add a <style> tag in to <html> document and that how it works.

### Webpack confirguration for CSS Module:
```
const path = require('path');

module: {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    rules: [
        {
            test: /.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
}
```

# Generated HTML Document 
```
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>#header {
            text-decoration: underline;
            color:blue;
        }</style>
    </head>

    <body>
        <h1 id="header">Hey i have updated the code !</h1>
        <ul id="shoppingList"><li>Apple</li><li>Orange</li><li>Banana</li></ul>
        <button id="button1">Click me</button>
        <script src="../dist/bundle.js"></script>
    </body>
</html>
```
