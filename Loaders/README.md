# Webpack CSS Loaders
In order use this first we should generate bundle.js using webpack command given below, we can achieve it with the help of any two below commands:
- npm run build
- npx webpack --config webpack.config.js --mode development 

## Webpack Documentation:
https://webpack.js.org/Loaders

### Important points for Loader configuration in Webpack:
- install the style-loader and css-loader npm packages

We can config multiple loaders under module attribute. For each loaders modules has rules property as below:

- Rules can have multiple objects and it has two properties 'test' & 'use'.
- 'test' attribute only accepts Regex (Regular Expression) .
- 'use' accepts only loader definition in form of array . You can pass loaders like ["style-loader", "css-loader"]. Important point here to be noted is that, the order of loaders. whenever loaders will be executed then it will starts from right to left, so 'css-loader' will be executed first and then 'style-loader'.
-  Behind the scene what CSS loader does? It helps of resolve CSS dependency in any JS file. Here whenever the index.js will be encoutered and it finds the import of index.css then it resolve this dependency. Once it loaded the dependency then it doesn't really know what to do with doing it, so it pass CSS data to the 'style-loader'. The 'style-loader' takes all the data processed by 'css-loader' and loads in to the html document. So it going to add a <style> tag in to <html> document and that how it works.


### This section covers about different types of load which extensively used by Webpack.

- Style Loaders
- CSS Loaders
- SCSS/SASS Loaders
- Image Loaders
- Font Loaders