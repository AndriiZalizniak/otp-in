'use strict';

const gulp = require('gulp');

const assetsDev = () =>
  gulp.src(`${global.paths.dev.assets}**/*`)
      .pipe(gulp.dest(global.paths.build.assets));

const assetsProd = () =>
  gulp.src(`${global.paths.dev.assets}**/*`)
      .pipe(gulp.dest(global.paths.dist.assets))

gulp.task('assets:dev', assetsDev);
gulp.task('assets:prod', assetsProd);

module.exports.assetsDev = assetsDev;
module.exports.assetsProd = assetsProd;