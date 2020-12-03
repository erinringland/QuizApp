const {src, dest} = require('gulp');

exports.default = () => {
  return src('src/*').pipe(dest('dest/'));
}