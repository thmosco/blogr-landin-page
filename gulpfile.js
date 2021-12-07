var gulp = require('gulp')

var sass = require('gulp-sass')(require('sass'))

// Watch
gulp.task('watch', function(){
    gulp.watch('app/scss/*.sass', gulp.series('sass')); 
  })

// All Tasks
gulp.task('sass', function(){
    return gulp.src('app/scss/styles.sass')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
  });