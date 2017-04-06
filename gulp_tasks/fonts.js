const gulp = require('gulp');
const path = require('path');
const conf = require('../conf/gulp.conf');

gulp.task('fonts', fonts);
function fonts(){
    return gulp.src([
        'bower_components/font-awesome/fonts/*',
        'src/fonts/icomoon/*',
        'src/fonts/Museo Sans/*',
        'src/fonts/Museo Slab/*'
    ])
    .pipe(gulp.dest(path.join(conf.path.dist(), '/styles/fonts/')));
}