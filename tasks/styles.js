import gulp from 'gulp';
import cssImport from 'postcss-import';
import cssNano from 'cssnano';
import cssNext from 'postcss-cssnext';
import postcss from 'gulp-postcss';

export async function styles() {
	return gulp
		.src('./src/clien*/styles/*.css', {
			sourcemaps: true,
		})
		.pipe(postcss([
			cssImport(),
			cssNext(),
			cssNano({
				autoprefixer: false,
			}),
		]))
		.pipe(gulp.dest('dist', {
			sourcemaps: '.',
		}));
}

gulp.task('styles', async () => {
	if (process.env.NODE_ENV === 'development') {
		gulp.watch('./src/clien*/**/*.css', styles);
	}

	return styles();
});
