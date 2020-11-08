const gulp = require("gulp");
const reports = require("gulp-sizereport");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const sass = require("gulp-sass");

gulp.task("default", function (done) {
  console.log("Gulp default");
  done();
});

gulp.task("sass", () =>
  gulp
    .src([
      "./style.scss",
      "./mix.scss",
      "./color-samples.scss",
      "./sass/**/*.scss",
    ])
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"))
    .pipe(reports({ gzip: true }))
);

gulp.task("watch", () => gulp.watch("./**/*.scss", gulp.parallel("sass")));
