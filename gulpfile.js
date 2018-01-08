"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');
const spawn = require('cross-spawn');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["client/app"], cb);
});

gulp.task('compile', ['clean'], () => {
  spawn('ng', ['build'], { stdio: 'inherit' });
});

gulp.task("default", ['compile'], function () {
    console.log("Building the project ...");
    gulp.src('dist/**/*')
    .pipe(gulp.dest('client/app'));
});
