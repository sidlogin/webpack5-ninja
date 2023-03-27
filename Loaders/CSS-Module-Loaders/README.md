# Webpack CSS Modules using Loaders
CSS Module are very helpful if same classname has defined in different components and overrides once it inserted on HTML page based on its precesence. CSS Modules help to segregating such classes so they are identified uniquely.

CSS Modules Reference: https://github.com/css-modules/css-modules

```
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #header {
                text-decoration: underline;
                color:blue;
            }
            .button {
                background: yellow;
            }
        </style>
        <style>
            .button {
                background: red;
            }
        </style>
    </head>

    <body>
        <h1 id="header">Hey i have updated the code !</h1>
        <ul id="shoppingList"><li>Apple</li><li>Orange</li><li>Banana</li></ul>
        <button id="button1">Click me</button>
        <script src="../dist/bundle.js"></script>
    </body>
</html>
```

### Webpack confirguration:
```
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true } },
                ]
            }
        ]
    }
};
```


### After adding CSS Module we get unique classes:

```
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #HCs2dRRKvIwDvm6nFtLh {
            text-decoration: underline;
            color:blue;
        }

        .A4ZxUlvRrRRgz53hPnaA {
            background: yellow;
        }
    </style>
    <style>.PN5N69j7UFVq1KeSd7B8 {
        background: red;
    }
    </style>
</head>
<body>
    <h1 id="header">Hey this is my first webpack application !!</h1>
    <ul id="shoppingList"></ul>
    <button id="button1" class="button">Click me</button>

    <script src="../dist/bundle.js"></script><button class="button">Clear</button>


</body></html>
```
