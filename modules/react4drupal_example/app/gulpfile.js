const { parallel } = require('gulp');
const run = require('gulp-run');
const watch = require('gulp-watch');

function js() {
  // Endless stream mode
  return watch('src/**/*.js', { ignoreInitial: false })
    .pipe(run('npm run build'));
}

exports.js = js;
exports.default = parallel(js);
