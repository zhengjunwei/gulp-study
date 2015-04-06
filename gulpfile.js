var gulp = require('gulp'),
		minifyCSS = require('gulp-minify-css'),
		csslint = require("gulp-csslint");


gulp.task('default', function() {
  return gulp.src('./asset/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'))
});

