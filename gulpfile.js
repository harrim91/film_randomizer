const gulp = require('gulp');
const mocha = require('gulp-mocha');
const yargs = require('yargs');

gulp.task('mocha', () => {
  let argv = yargs.alias('w', 'watch').argv;

  if(argv.w) gulp.watch(['app/**/*.js', 'test/unit/**/*.spec.js'], ['mocha']);

  gulp.src('test/unit/**/*.spec.js', { read: false })
    .pipe(mocha());
});