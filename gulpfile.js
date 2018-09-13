var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    lec = require('gulp-line-ending-corrector'),
    pkg = require('./package.json');

gulp.task("minifyJS", function (done) {
    gulp.src(["src/jquery.unobtrusive-ajax.js"])
        .pipe(replace(/@version.*/, '@version v' + pkg.version))
        .pipe(gulp.dest("dist"))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(lec({ eolc: 'CRLF' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist"));
    done();
});

gulp.task('default', gulp.series('minifyJS', function (done) {
    done();
}));
