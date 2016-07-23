class ImageOptimizeTask extends Elixir.Task {

    /**
     * Create a new ImageOptimizeTask instance.
     *
     * @param {string}      name
     * @param {GulpPaths}   paths
     * @param {object|null} options
     */
    constructor(name, paths, options) {
        super(name, paths, paths);

        this.options = {
            pluginOptions: {
                pngquant: true,
                optipng: false,
                zopflipng: true,
                jpegRecompress: false,
                jpegoptim: true,
                mozjpeg: true,
                gifsicle: true,
                svgo: false
            }
        };
    }


    /**
     * Build the Gulp task.
     */
    gulpTask() {
        return (
            gulp
            .src(this.src.path)
            .pipe(require('gulp-image')(this.options.pluginOptions))
            .on('error', this.onError())
            .pipe(this.saveAs(gulp))
            .pipe(this.onSuccess())
        );
    }
}

export default ImageOptimizeTask;
