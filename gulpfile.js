const gulp = require("gulp");
const print = require("gulp-print").default;
const reports = require("gulp-sizereport");
const replace = require("gulp-string-replace");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const sass = require("gulp-sass");
const shell = require("gulp-shell");
const rename = require("gulp-rename");

/**
  Our gulp tasks live in their own files,
  for the sake of clarity.
 */
require("require-dir")("./gulp");
require("require-dir")("./node_modules/@shawnsandy/ideas/gulp/");


gulp.task("sass", () =>
  gulp
    .src([
      "./**/**/*.scss",
      "!./**/node_modules/**/*.scss",
      "!./apps/**/*.scss",
    ])
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./www"))
    .pipe(minify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("./www/"))
    .pipe(reports({ gzip: true }))
);

gulp.task("reports", () =>
  gulp.src("./dist/**/*.*").pipe(
    reports({
      gzip: true,
    })
  )
);

gulp.task("watch", () => gulp.watch("./src/**/*.scss", gulp.parallel("sass")));

gulp.task("watch:scripts", () =>
  gulp.watch("./src/js/*.js", gulp.parallel("js"))
);

gulp.task("start", shell.task("yarn eleventy --serve"));

gulp.task("dev", gulp.parallel("watch", "watch:scripts", "start"));

gulp.task("sizereport", function () {
  return gulp.src(["./dist/js/**/*", "./dist/css/**/*.css"]).pipe(
    reports({
      gzip: true,
    })
  );
});
