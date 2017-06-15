var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
	watch = require('gulp-watch'),
	rigger = require('gulp-rigger');

gulp.task('less', function () {
	gulp.src('./app/css/**/*.less')
		.pipe(less())
		.pipe(concat('main.css'))
		.pipe(minifyCSS())   
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('html', function () {
    gulp.src('./app/views/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watcher', function(){
	gulp.watch('./app/css/**/*.less', ['less']);
	gulp.watch('./app/views/**/*.html', ['html']);	
})

gulp.task('default', ['watcher', 'less', 'html']);