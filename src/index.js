import ImageOptimizeTask from './ImageOptimizeTask.js';

/*
 |----------------------------------------------------------------
 | Image Optimization Task
 |----------------------------------------------------------------
 |
 | This task will optimize your images. I can handle
 | png, jpeg, gif and svg. It will also tell you
 | how much space you actually saved. Cheers
 |
 */

Elixir.extend('imageOptimize', function(src, output, options) {
    new ImageOptimizeTask('imageOptimize', getPaths(src, output), options);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths(src, output) {
    if(src === undefined)
        src = Elixir.config.assetsPath+'/images';

    return new Elixir.GulpPaths()
        .src(src, Elixir.config.assetsPath+'/images')
        .output(output || Elixir.config.publicPath+'/images');
};
