const gulp = require('gulp');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');
const del = require('del');
const eslint = require("gulp-eslint");

const tsProject = ts.createProject('tsconfig.json');
const defaultSequence = ["eslint", "clean", "tsCompile", "cpy"];

gulp.task("eslint", () =>
    tsProject.src()
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
);

gulp.task('clean', () => {
    return del(['dist/*']).then(paths => {
        //console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('tsCompile', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/src'));
});

gulp.task('cpy', function() {
    return gulp.src(['package.json','package-lock.json'])
      .pipe(gulp.dest('./dist/src'));
});

gulp.task('unitTest', () => {
    return gulp.src(['./dist/**/test/unit/**/*.spec.js'], {read: false})
          .pipe(mocha({reporter: 'list', exit: true, timeout:4000}))
          .on('error', console.error);
});

gulp.task('functionTest', () => {
    return gulp.src(['./dist/**/test/function/**/machine*.js'], {read: false})
          .pipe(mocha({reporter: 'list', exit: true, timeout:8000}))
          .on('error', console.error);
});

gulp.task('build', gulp.series(defaultSequence), () => {});

gulp.task('watchUnit', () => {
    return gulp.watch(['src/**/*.ts', 'test/**/*.spec.ts'], gulp.series([...defaultSequence, "unitTest"]));
});

gulp.task('watchFunction', () => {
    return gulp.watch(['src/**/*.ts', 'test/**/*.spec.ts'], gulp.series([...defaultSequence, "functionTest"]));
});

gulp.task('default', gulp.series([...defaultSequence, "unitTest", "watchUnit"]), () => {});

gulp.task('unit', gulp.series([...defaultSequence, "unitTest", "watchUnit"]), () => {});
gulp.task('function', gulp.series([...defaultSequence, "functionTest", "watchFunction"]), () => {});