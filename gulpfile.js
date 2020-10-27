var gulp = require('gulp');
var ts = require('gulp-typescript');
const { series } = require('gulp');
const tsFiles = "src/**/*.ts";


var rename = require('gulp-es6-imports-renamer');

var fs = require('fs');
var path = require('path');
var recast = require('recast');
var renamer = require('es6-imports-renamer');

function renameFn(originalPath, parentPath, callback) {
	callback(null, path.join(originalPath, 'index'));
}

const compileFromTs = (cb) => {
    gulp.src(tsFiles)
        .pipe(ts({
            noImplicitAny: true,
            module: "UMD",
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