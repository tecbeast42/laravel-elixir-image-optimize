const gulp = require('gulp');
const Elixir = require('laravel-elixir');
const image = require('gulp-image');

const $ = Elixir.Plugins;
const config = Elixir.config;

config.images = {
	folder: 'images',
	outputFolder: 'images',
	pluginOptions: {
		pngquant: true,
	    optipng: false,
	    zopflipng: true,
	    advpng: true,
	    jpegRecompress: false,
	    jpegoptim: true,
	    mozjpeg: true,
	    gifsicle: true, 
	    svgo: true
	},
};

Elixir.extend('imageOptimize',function(src, output, baseDir, options) {
	const paths = prepGulpPaths(src, output, baseDir);
	config.images.pluginOptions = options || config.images.pluginOptions;

	return new Elixir.Task('imageOptimize', function () {
        return gulp.src(paths.src.path)
        	.pipe(image(config.images.pluginOptions))
        	.on('error', function (e) {
        		new Elixir.Notification('Image optimization faild')
        		this.emit('end');
        	})
        	.pipe(gulp.dest(paths.output.baseDir));
	});
});

function prepGulpPaths(src, output, baseDir) {
	return new Elixir.GulpPaths()
		.src(src || config.get('assets.images.folder'), baseDir || config.get('assets.images.folder'))
		.output(output || config.get('public.images.outputFolder'));
}