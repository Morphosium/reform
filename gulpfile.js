var gulp = require('gulp');
var ts = require('gulp-typescript');
const { series } = require('gulp');
const tsFiles = "src/**/*.ts";

var bundle = require('@lernetz/gulp-typescript-bundle');
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
            module: "commonjs",
            target: "es6",
            "sourceMap": true,
            "declaration": true,
            "declarationMap": true,
            "allowJs": true,
            "esModuleInterop": false
        }))
        .pipe(gulp.dest('public/module'));
    cb();
};


const watchChanges = (cb) => {
    gulp.watch(tsFiles, series(compileFromTs))
    cb();
}

gulp.task("default", watchChanges)
gulp.task("watch-on-changes", watchChanges)
gulp.task('build-bundle', bundle({ dest: 'public/bundle', src: 'src/reform.ts', name: "reform" }));
gulp.task('build-module', series(compileFromTs));