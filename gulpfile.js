//引入gulp模块
var gulp = require('gulp');
var babel = require("gulp-babel");



//定义默认任务
gulp.task('default', function() {
    // 将你的任务的任务代码放在这
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'))
});

