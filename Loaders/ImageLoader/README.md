# Webpack Image Loaders
In order use this first we should generate bundle.js using webpack command given below, we can achieve it with the help of any two below commands:
- npm run build
- npx webpack --config webpack.config.js --mode development 


## Webpack Documentation:
https://webpack.js.org/Loaders

### Adding Image Loader configuration for Webpack:

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
                test: /.(jpg|jpeg|png|gif|svg)/,
                type: "assets/resource"
            }
        ]
    }
};
```
