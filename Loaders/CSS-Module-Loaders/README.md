# Webpack CSS Modules using Loaders
CSS Module helps to segregating class wherever they are identifies uniquely.

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

After adding module way:

```
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>#HCs2dRRKvIwDvm6nFtLh {
    text-decoration: underline;
    color:blue;
}

.A4ZxUlvRrRRgz53hPnaA {
    background: yellow;
}</style><style>.PN5N69j7UFVq1KeSd7B8 {
    background: red;
  }
  </style></head>

<body>
    <h1 id="header">Hey this is my first webpack application !!</h1>
    <ul id="shoppingList"></ul>
    <button id="button1" class="button">Click me</button>

    <script src="../dist/bundle.js"></script><button class="button">Clear</button>


</body></html>
```
