var gulp = require('gulp'),
  watch = require('gulp-watch'),
  run = require('gulp-run');

gulp.task('default', function () {
  // Endless stream mode
  return watch('src/**/*.js', { ignoreInitial: false })
    .pipe(run('npm run build'));
});
