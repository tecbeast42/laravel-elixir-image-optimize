var elixir = require('laravel-elixir');

require('./dist/index.js');

elixir(function(mix) {
    mix.imageOptimize('./test/sample-images','test/output');
});
