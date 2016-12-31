var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('default', ['scripts', 'styles'], function() {
  
  // watch js directories
  gulp.watch('./assets/js/templates/*.js', ['scripts']);

  // watch sass directories
  gulp.watch('./assets/sass/*.scss', ['styles']);

});

// JS concat, strip debugging and minify js
// TODO: uglify not working
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

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
	gulp.src('./assets/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));

  	gulp.src([
  		'./assets/css/*.css',
  		'./assets/libs/jquery-ui-1.12.1/jquery-ui.min.css',
		'./assets/libs/jquery-ui-1.12.1/jquery-ui.structure.min.css',
		'./assets/libs/jquery-ui-1.12.1/jquery-ui.theme.min.css'
  	])
	    .pipe(concat('styles.css'))
	    .pipe(autoprefix('last 2 versions'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./assets/css/build/'));
});