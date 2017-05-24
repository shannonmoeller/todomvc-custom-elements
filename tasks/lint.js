import gulp from 'gulp';
import eslint from 'gulp-eslint';
import stylelint from 'gulp-stylelint';

export async function lintScripts() {
	return gulp
		.src('./{src,tasks,test}/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format());
}

export async function lintStyles() {
	return gulp
		.src('./src/**/*.css')
		.pipe(stylelint({
			failAfterError: false,
			reporters: [{
				formatter: 'string',
				console: true,
			}],
		}));
}

export const lint = gulp.parallel([
	lintScripts,
	lintStyles,
]);

gulp.task('lint', async () => {
	if (process.env.NODE_ENV === 'development') {
		gulp.watch('./src/**/*.js', lintScripts);
		gulp.watch('./src/client/**/*.css', lintStyles);
	}

	return lint();
});
