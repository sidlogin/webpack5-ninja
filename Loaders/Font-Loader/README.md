### Adding Font Loader configuration for Webpack:
- Need to check configuration for loading font through CSS file not with js
```
modules: {
    rules: [
        {
            test: /.(ttf|woff|woff2)$/,
            type: "asset/resource",
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
                type: "assets/resource"
            },
            {
                test: /.(ttf|woff|woff2)$/,
                type: "asset/resource",
            }
        ]
    }
};
```
