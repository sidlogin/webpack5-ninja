### Adding SASS Loader configuration for Webpack:
- Add the image loader rule to achieve the same

```
{
    test: /.s[ac]ss$/,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader", options: { modules: true } },
        { loader: "sass-loader"}
    ]
}
```

## Final Webpack after change:
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
                test: /.s[ac]ss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader"}
                ]
            }
        ]
    }
};
```
