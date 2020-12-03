const {src, dest} = require('gulp');

function move(){
  return src('src/**/*')
  .pipe(dest('dest/'))
}

exports.move = move;