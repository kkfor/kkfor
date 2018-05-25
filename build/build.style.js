const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

gulp.task('sass', function() {
  return gulp.src('../src/styles/index.scss')
    .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(rename('kkfor.css'))
    .pipe(gulp.dest('../dist/styles'))
})

gulp.task('fonts', function() {
  gulp.src('../src/styles/icon/fonts/*.*')
    .pipe(gulp.dest('../dist/styles/fonts'))
})

gulp.task('default', ['sass', 'fonts'])