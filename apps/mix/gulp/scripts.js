var gulp = require("gulp");
const rename = require("gulp-rename");
const reports = require("gulp-sizereport");

gulp.task("js", () =>
  gulp
    .src("./src/js/*.js")
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      reports({
        gzip: true,
      })
    )
    .pipe(gulp.dest("./src/js/min"))
);
