'use strict';

const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const removeEmptyLines = require('gulp-remove-empty-lines');

const htmlDev = () =>
  gulp.src(`${global.paths.dev.html}*.html`)
  .pipe(nunjucks.compile())
  .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })
  .pipe(removeEmptyLines())
  .pipe(gulp.dest(global.paths.build.html));

const htmlProd = () =>
  gulp.src(`${global.paths.dev.html}*.html`)
  .pipe(nunjucks.compile())
  .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })
  .pipe(removeEmptyLines())
  .pipe(gulp.dest(global.paths.dist.html));

gulp.task('html:dev', htmlDev);
gulp.task('html:prod', htmlProd);

module.exports.htmlDev = htmlDev;
module.exports.htmlProd = htmlProd;