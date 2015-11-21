var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify()
        .require('src/app/index.js', {
            debug: true,
            entry: true,  
            extensions: ['.es6','.js'], 
        })
        .transform(babelify, {
            extensions: ['.es6','.js'], 
            presets: ["es2015", "stage-0", "stage-1"]
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/app/**/*.js', ['browserify']);
});