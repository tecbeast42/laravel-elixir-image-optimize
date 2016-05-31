# laravel-elixir-image-optimize

Laravel Elixir extension to optimize images with node.

# Usage

The extension assumes all your images are in ./resources/assets/images. It will copy all these images to ./public/imgaes after optimization.

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-image-optimize');

elixir(function(mix) {
    mix.imageOptimize(src,output,baseDir);
});
```

If you use the default laravel paths you can just do

```js
elixir(function(mix) {
    mix.imageOptimize();
});
```