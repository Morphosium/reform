var gulp = require('gulp');
var ts = require('gulp-typescript');

function defaultTask(cb) {
    // place code for your default task here
    return gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        outFile: 'reform.dist.js'
    }))
    .pipe(gulp.dest('dist'));

    cb();
  }

  exports.default = defaultTask