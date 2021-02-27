'use strict';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgcss = require('gulp-svg-css');


const svgBg = () =>
  gulp.src(`${global.paths.dev.svg}input/**/*.svg`)
    .pipe(svgmin({
      plugins: [
        {removeViewBox: false},
        {removeUnknownsAndDefaults: false},
        {removeComments: true},
        {minifyStyles: false},
        {removeTitle: true},
        {removeDesc: true},
        {removeUselessDefs: true},
        {convertTransform: false}
      ]
    }))
    // .pipe(replace('#', '%23'))
    // .pipe(replace('"', "'"))
    .pipe(svgcss({
      fileName: 'icons',
      cssPrefix: 'bg-',
      addSize: false
    }))
    // .pipe(replace('-_', "_"))
    .pipe(gulp.dest(global.paths.dev.svg));
  // gulp.src(`${global.paths.dev.img}**/*.{png,gif,jpg,svg}`)
      // .pipe(gulp.dest(global.paths.dist.img))

gulp.task('svg', svgBg);

module.exports.svgBg = svgBg;