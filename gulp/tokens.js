var gulp = require("gulp");

gulp.task("tokens", function (done) {
  var tokens = [
    {
      src: "./src/scss/partials/_variables.scss",
      dest: "./src/_data/tokens/colors.json",
      lineStartsWith: "$i-brand-color-",
      allowVarValues: true,
    },
  ];

  srcToJson(tokens, {}, function () {
    done();
  });
});
