### Adding Image Loader configuration for Webpack:
- Adding hash method in file-name for browser cachcing
- Adding clean attribute to clear and regenerate 'Dist' folder everytime

```
output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext]",
    clean: true,
},
modules: {
    rules: [
        {
            test: /.(jpg|jpeg|png|gif|svg)/,
            type: "asset/resource"
        }
    ]
}
```

## Final Webpack after change:
```
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true } },
                ]
            },
            {
                test: /.s[ac]ss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader"}
                ]
            },
            {
                test: /.(jpg|jpeg|png|gif|svg)/,
                type: "asset/resource"
            }
        ]
    }
};
```
