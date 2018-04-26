const gulp = require("gulp");
const stylus = require("gulp-stylus");
const pug = require("gulp-pug");
const cleanCss = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");

gulp.task("styles", function() {
  return gulp
    .src("./src/stylus/style.styl")
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe( gulp.dest("./dest/css/") );
});
gulp.task("pug", function() {
  return gulp
    .src("./src/pug/!(_)*.pug")
    .pipe( pug() )
    .pipe( gulp.dest("./dest") );
});
gulp.task('images', () => {
  gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('./dest/img'));
})
gulp.task('fonts', () => {
  gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('./dest/fonts'));
})
gulp.task("js", function() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe( babel() )
    .pipe( gulp.dest("./dest/js") );
});
gulp.task("watch", function() {

  gulp.watch("./src/**/*.styl", ["styles"]);
  gulp.watch("./src/**/*.pug", ["pug"]);
  gulp.watch("./src/**/*.js", ["js"]);

});

gulp.task("default", ["styles", "pug", "js", "images", "fonts" , "watch"]);
gulp.task("build", ["styles", "pug", "js", "images", "fonts" ]);
