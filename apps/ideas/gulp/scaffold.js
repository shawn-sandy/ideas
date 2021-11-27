const gulp = require("gulp");

// fetch command line arguments
const arg = ((argList) => {
  let arg = {},
    a,
    opt,
    thisOpt,
    curOpt;
  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, "");

    if (opt === thisOpt) {
      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;
    } else {
      // argument name
      curOpt = opt;
      arg[curOpt] = true;
    }
  }

  return arg;
})(process.argv);

const scaffold = (sourceFolder, targetFolder = "packages") => {
  let packageName = arg.name || arg.n;
  // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
  let packageTitle = capitalize(packageName.replace("-", " "));
  const dirs = [
    `scaffolds/${sourceFolder}/**/*`,
    `scaffolds/${sourceFolder}/.*`,
    `scaffolds/${sourceFolder}/*.*`
  ];
  gulp
    .src(dirs, {
      base: `./scaffolds/${sourceFolder}`
    })
    .pipe(replace("package-name", packageName))
    .pipe(replace("package-title", packageTitle))
    .pipe(gulp.dest(`./${targetFolder}/${packageName}`))
    .pipe(print());
};

const capitalize = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

gulp.task("new:page", () => {
  scaffold("pages", "pages");
});
