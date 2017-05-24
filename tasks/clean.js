import gulp from 'gulp';
import del from 'del';

export async function clean() {
	return del('dist');
}

gulp.task('clean', clean);
