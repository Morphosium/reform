var gulp = require('gulp');
var ts = require('gulp-typescript');
const { series } = require('gulp');
const tsFiles = "src/**/*.ts";
const testTsFiles = "./indexscript.ts"

const compileFromTs = (cb) => {
    gulp.src(tsFiles)
        .pipe(ts({
            noImplicitAny: true,
            target: "es6",
            module: "es6"
            //outFile: 'reform.dist.js'
        }))
        .pipe(gulp.dest('output'));
    cb();
};


const watchChanges = (cb) => {
    gulp.watch(tsFiles, series(compileFromTs))
    cb();
}

gulp.task("default", watchChanges)
gulp.task("watch-on-changes", watchChanges)