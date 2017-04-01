var batch = require('gulp-batch');
var del = require('del');
var gulp = require('gulp')
var merge = require('merge2');
var reload = require('gulp-reload');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');

gulp.task('reload', function() {
    reload();
});
 
gulp.task('scripts', function() {
    var tsResult = gulp.src('src/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            declaration: true
         }));
 
    return merge([
        tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('build/dist/js')),
        tsResult.dts
            .pipe(gulp.dest('build/ts-definitions'))
    ]);
});

gulp.task('static', function() {
    gulp.src(['src/*.html', 'src/assets/**', 'src/libraries/**'], { base: 'src'})
        .pipe(gulp.dest('build/dist'));
});

gulp.task('build', ['static', 'scripts']);

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('clean-build', function(callback) {
  return runSequence('clean',
              'build',
              callback);
});

gulp.task('watch', ['build'], function () {
    watch('src/*', batch(function (events, done) {
        gulp.start('build', done);
    }));
});

gulp.task('default', ['clean-build']);
