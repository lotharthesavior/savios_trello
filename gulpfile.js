var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default', ['scripts'], function() {
  
  // watch js directories
  gulp.watch('./assets/js/templates/*.js', ['scripts']);

});

// JS concat, strip debugging and minify js
gulp.task('scripts', function(cb) {
	pump([
		gulp.src([
			// templates
			'./assets/js/templates/card.js',
			'./assets/js/templates/line.js',
			// libs
			'./assets/libs/jquery-ui-1.12.1/external/jquery/jquery.js',
			'./assets/libs/jquery-ui-1.12.1/jquery-ui.js',
			'./node_modules/underscore/underscore.js'
		]),
		concat('script.js'),
		// uglify(),
		gulp.dest('./assets/js/build/')
	], cb)
});