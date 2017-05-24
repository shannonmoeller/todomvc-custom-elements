import gulp from 'gulp';
import babel from 'gulp-babel';
import bro from 'gulp-bro';
import sourcemaps from 'gulp-sourcemaps';
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
		plugins: [
			'transform-object-rest-spread',
			'transform-runtime',
		],
		presets: [
			['env', envConfig],
		],
	};

	const browserifyConfig = {
		debug: true,
		transform: [
			['babelify', babelConfig],
		],
	};

	return gulp
		.src('./src/clien*/scripts/*.js')
		.pipe(bro(browserifyConfig))
		.pipe(sourcemaps.init({
			loadMaps: true,
		}))
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
		plugins: [
			'transform-object-rest-spread',
			'transform-runtime',
		],
		presets: [
			['env', envConfig]
		],
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
