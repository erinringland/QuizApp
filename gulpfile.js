const gulp = require('gulp');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

gulp.task('move', function () {
  return gulp.src('src/*')
      .pipe(gulp.dest('dest/'));
});

gulp.task('styles', function () {
  return gulp.src('src/css/*')
    .pipe(concat('style.css'))
    .pipe(sourcemaps.init())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/css/'));
});