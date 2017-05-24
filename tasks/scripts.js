import gulp from 'gulp';
import babel from 'gulp-babel';
import bro from 'gulp-bro';
import uglify from 'gulp-uglify';

export async function scriptsClient() {
	const envConfig = {
		targets: {
			browsers: [
				'last 2 versions',
				'> 1%',
			],
		},
	};

	const babelConfig = {
		plugins: ['transform-runtime'],
		presets: [['env', envConfig]],
	};

	const browserifyConfig = {
		transform: [['babelify', babelConfig]],
	};

	return gulp
		.src('./src/clien*/scripts/*.js', {
			sourcemaps: true,
		})
		.pipe(bro(browserifyConfig))
		.pipe(uglify())
		.pipe(gulp.dest('dist', {
			sourcemaps: '.',
		}));
}

export async function scriptsServer() {
	const envConfig = {
		targets: {
			node: 6,
		},
	};

	const babelConfig = {
		presets: [['env', envConfig]],
	};

	return gulp
		.src('./src/{server,shared}/**/*.js')
		.pipe(babel(babelConfig))
		.pipe(gulp.dest('dist'));
}

export const scripts = gulp.parallel([
	scriptsClient,
	scriptsServer,
]);

gulp.task('scripts', async () => {
	if (process.env.NODE_ENV === 'development') {
		gulp.watch('./src/{client,shared}/**/*.js', scriptsClient);
		gulp.watch('./src/{server,shared}/**/*.js', scriptsServer);
	}

	return scripts();
});
