'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');

const scssDev = () =>
  gulp
  .src(`${global.paths.dev.scss}*.scss`)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(global.paths.build.css));

const scssProd = () =>
  gulp
  .src(`${global.paths.dev.scss}*.scss`)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(gulp.dest(global.paths.dist.css));

gulp.task('scss:dev', scssDev);
gulp.task('scss:prod', scssProd);

module.exports.scssDev = scssDev;
module.exports.scssProd = scssProd;