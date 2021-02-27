'use strict';

const gulp = require('gulp');

const fontsDev = () =>
  gulp.src(`${global.paths.dev.fonts}**/*.{ttf,woff,woff2,eof,svg}`)
      .pipe(gulp.dest(global.paths.build.fonts));

const fontsProd = () =>
  gulp.src(`${global.paths.dev.fonts}**/*.{ttf,woff,woff2,eof,svg}`)
      .pipe(gulp.dest(global.paths.dist.fonts));

gulp.task('fonts:dev', fontsDev);
gulp.task('fonts:prod', fontsProd);

module.exports.fontsDev = fontsDev;
module.exports.fontsProd = fontsProd;