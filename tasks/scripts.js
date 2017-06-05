import gulp from 'gulp';
import babel from 'gulp-babel';
import bro from 'gulp-bro';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

export async function scriptsClient() {
	return gulp
		.src('./src/clien*/scripts/*.js')
		.pipe(bro({
			debug: true,
			transform: [['babelify', {
				presets: [['env', {
					targets: {
						browsers: [
							'last 2 versions',
							'> 1%',
						],
					},
				}]],
			}]],
		}))
		.pipe(sourcemaps.init({
			loadMaps: true,
		}))
		.pipe(uglify({
			output: {
				comments: /copyright|li[cs]en[cs]e|preserve/gi,
			},
		}))
		.pipe(gulp.dest('dist', {
			sourcemaps: '.',
		}));
}

export async function scriptsServer() {
	return gulp
		.src('./src/{server,shared}/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
}

export const scripts = gulp.parallel(
	scriptsClient,
	scriptsServer,
);

gulp.task('scripts', async () => {
	if (process.env.NODE_ENV === 'development') {
		gulp.watch('./src/{client,shared}/**/*.js', scriptsClient);
		gulp.watch('./src/{server,shared}/**/*.js', scriptsServer);
	}

	return scripts();
});
