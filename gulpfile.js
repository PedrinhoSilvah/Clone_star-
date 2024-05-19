const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./sass/star.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'    
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dev'));
}

function compilaJavascript(){
    return gulp.src('./script.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dev'))
}


exports.default = function(){
    gulp.watch('./sass/*', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./script.js', {ignoreInitial: false}, gulp.series(compilaJavascript));
}