const gulp = require('gulp');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('move', function () {
  return gulp.src('src/*')
      .pipe(gulp.dest('dest/'));
});

gulp.task('styles', function () {
  return gulp.src('src/css/*')
    .pipe(concat('style.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer() ]))
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task('images', function () {
  return gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dest/images/'))
});

gulp.task('default', gulp.parallel('move', 'styles', 'js', 'images'));