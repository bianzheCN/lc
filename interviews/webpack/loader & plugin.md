# Loader & Plugin

## Loader

Webpack enables use of loaders to preprocess files.
This allows you to bundle any static resource way beyond JavaScript.
You can easily write your own loaders using Node.js.

Loaders are activated by using loadername! prefixes in require() statements, or are automatically applied via regex from your webpack configuration – see configuration.

## Plugin

Plugins are the backbone of webpack.
Webpack itself is built on the same plugin system that you use in your webpack configuration!

They also serve the purpose of doing anything else that a loader cannot do.
Webpack provides many such plugins out of the box.
