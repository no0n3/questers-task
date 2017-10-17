var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require("gulp-inject");
var ngHtml2Js = require("gulp-ng-html2js");

var buildDir = 'src';
var jsDest  = buildDir + '/js/';
var cssDest = buildDir + '/css/';

gulp.task('js', function() {
    gulp
        .src([
            'node_modules/underscore/underscore-min.js',
            'src/js/app.js'
        ])
        .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('build', ['js']);
