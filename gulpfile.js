const gulp = require('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const shell = require('gulp-shell');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

/*function runShellTerminal() {
    const commands = [
        'npm run build'
    ];

    return gulp.src('.')
        .pipe(shell(commands.join(' && ')))
}
*/

function compileStyles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([tailwindcss, autoprefixer]))
        .pipe(gulp.dest('./dist/css'))
};

function compileImg() {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}

function watchFiles() {
    gulp.watch(['./src/styles/**/*.scss', './src/styles/**/*.css', './index.html'], gulp.series(compileStyles));
}

exports.watchFiles = gulp.series(watchFiles);
exports.build = gulp.series(compileStyles, compileImg);  