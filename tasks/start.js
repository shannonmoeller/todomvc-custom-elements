import gulp from 'gulp';
import nodemon from 'nodemon';

import './build';

export function start() {
	setTimeout(() => {
		nodemon({
			script: 'bin/www',
			delay: '1s',
			inspect: true,
			watch: [
				'dist/server',
				'dist/shared',
			],
		});
	}, 3000);
}

gulp.task('start', gulp.series(
	'default',
	start,
));
