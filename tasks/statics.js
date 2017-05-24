import gulp from 'gulp';

export async function statics() {
	return gulp
		.src('./src/*/assets/**/*.*')
		.pipe(gulp.dest('dist'));
}

gulp.task('statics', () => {
	if (process.env.NODE_ENV === 'development') {
		gulp.watch('./src/client/assets/**/*.*', statics);
	}

	return statics();
});
