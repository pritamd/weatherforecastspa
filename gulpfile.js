'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('compress', function() {
	return gulp.src(['./src/app.js', './src/services.js', './src/controllers.js', './src/routes.js', './src/directives.js'])
            .pipe(concat('concat.js'))
            .pipe(gulp.dest('dist'))
			.pipe(uglify())
			.pipe(gulp.dest('dist'))
			.on('error', function(err) {
				console.error('Error in compress task', err.toString());
		});
});    
