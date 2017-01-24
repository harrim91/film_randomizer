var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function() {
  gulp.src('./test/unit/**/*.spec.js', { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        expect: require('chai').expect
      }
    }));
});