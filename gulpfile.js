const gulp = require('gulp');
const csso = require('gulp-csso');
const concatCss = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

gulp.task('move', function () {
  return gulp.src('src/*')
      .pipe(gulp.dest('dest/'));
});