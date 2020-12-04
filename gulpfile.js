// const {src, dest} = require('gulp');
// const {src, dest} = require('gulp');


const { src, dest, series, parallel } = require ('gulp');

function move(){
  return src('src/**/*')
  .pipe(dest('dest/'))
}

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

function stylesTask() {
  return src('src/css/*.css')
  .pipe(postcss([ autoprefixer() ]))
  .pipe(dest('/dest/css'))
}

exports.move = move;
exports.styles = stylesTask;

