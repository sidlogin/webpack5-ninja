### Webpack confirguration for CSS Module:
```
{
    test: /.css$/,
    use: ["style-loader", "css-loader"]
}
```
## Final Webpack after change:

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
