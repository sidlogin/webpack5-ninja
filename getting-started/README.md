# webpack5-ninja
Basic Webpack Configuration:

Here we adding a basic webpack configuration:
- Created package.json using following command npm init -y
- Installed DevDependencies for Webpack: npm install webpack webpack-cli
- Installed Lodash Package as Dependencies: npm install lodash 

Import lodash package in index.js and removed CDN lodash URL from index.html

Created webpack.config.js file and added basic configuration to generate bundle.js in dist folder. Also replace the index.js with bundle.js in to index.html

```
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}
```
