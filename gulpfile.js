//gulp
var gulp = require('gulp');
//plugins
var vulcanize = require('gulp-vulcanize');

//variables
var distributionFolder = 'distr';

// Vulcanize
gulp.task('vulcanize', function () {
	return gulp.src('index.html')
		.pipe(vulcanize({
			abspath: '',
			excludes: [],
			stripExcludes: false,
			inlineScripts: true,
  			inlineCss: true,
  			stripComments: true
		}))
		.pipe(gulp.dest(distributionFolder));
});


// Default Task
gulp.task('default', ['vulcanize']);