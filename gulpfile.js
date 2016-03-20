var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var testFiles = ['./test/**/*.js'];

gulp.task('mocha', function() {
  return gulp.src('test/*.js')
	.pipe(mocha({reporter: 'spec'}));
});

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
	.pipe(jshint({
  node: true,
  globals: {
    describe: true,
    it: true,
    before: true,
    after: true,
  }

	}))
	.pipe(jshint.reporter('default'));
});

gulp.task('jshint', ['jshint:test']);
gulp.task('default', ['jshint', 'mocha']);
