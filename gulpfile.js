const gulp = require('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const shell = require('gulp-shell');

function runShellTerminal() {
    const commands = [
        'npm run dev',
        'npm run watch'
    ];

    return gulp.src('.')
        .pipe(shell(commands.join(' && ')))
}

function compilleSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'))
};

function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', runShellTerminal);
    gulp.watch('./src/styles/**/*.css', runShellTerminal);
    gulp.watch('./index.html', runShellTerminal );
}

exports.build = gulp.parallel(watchFiles);