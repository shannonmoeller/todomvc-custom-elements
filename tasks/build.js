import gulp from 'gulp';

import './clean';
import './lint';
import './scripts';
import './statics';
import './styles';

export const build = gulp.series([
	'lint',
	'clean',
	gulp.parallel([
		'statics',
		'scripts',
		'styles',
	]),
]);

gulp.task('default', build);
