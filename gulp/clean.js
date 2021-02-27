'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

const cleanDir = (dir) =>
      gulp.src([
        `${dir}/**.*`,
        `!${dir}/.gitignore`
        ], {read: false})
          .pipe(clean());

module.exports.cleanDir = cleanDir;