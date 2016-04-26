//gulp
var gulp = require('gulp');
//plugins
var gutil = require('gulp-util');
var vulcanize = require('gulp-vulcanize');
var htmlmin = require('gulp-htmlmin');

//variables
var distributionFolder = 'distr';

// Test message
gulp.task('message', function() {
  return gutil.log('Gulp is running!');
});


// Vulcanize and minify
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
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(distributionFolder))
        .pipe(gulp.dest(distributionFolder)).on('error', gutil.log)
});

//Copy distribution files
gulp.task('copyFiles', function() {
  // copy any html files in source/ to public/
  gulp.src('images/*.jpg').pipe(gulp.dest(distributionFolder + '/images'));
  gulp.src('docs/*.pdf').pipe(gulp.dest(distributionFolder + '/docs'));
  gulp.src('*.ico').pipe(gulp.dest(distributionFolder));
});

// Default Task
gulp.task('default', ['message', 'copyFiles', 'vulcanize']);

//Watch Task
gulp.watch('elements/*.html', ['changeMessageElements', 'default']);

//Message notifying us of change in elements
gulp.task('changeMessageElements', function() {
  return gutil.log('An element changed.');
});

