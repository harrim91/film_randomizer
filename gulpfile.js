const gulp = require('gulp');
const mocha = require('gulp-mocha');
const yargs = require('yargs');

gulp.task('mocha', () => {
  let argv = yargs.alias('w', 'watch').argv;

  if(argv.w) gulp.watch(['app/**/*.js', 'spec/unit/**/*.spec.js'], ['mocha']);

  gulp.src('spec/unit/**/*.spec.js', { read: false })
    .pipe(mocha({
      opts: './mocha.opts'
    }));
});