import gulp from 'gulp';
import tapDiff from 'tap-diff';
import tape from 'gulp-tape';

export async function test() {
	return gulp
		.src('./test/**/*.js')
		.pipe(tape({
			reporter: tapDiff(),
		}));
}

gulp.task('test', test);
