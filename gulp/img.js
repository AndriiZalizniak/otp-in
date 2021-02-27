'use strict';

const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('img:webp', () =>
    gulp.src(`${global.paths.dev.webp.input}**/*.*`)
        .pipe(webp({quality: 100 }))
        .pipe(gulp.dest(global.paths.dev.webp.output))
);

const imgDev = () =>
  gulp.src(`${global.paths.dev.img}**/*.{png,gif,jpg,svg,ico}`)
      .pipe(gulp.dest(global.paths.build.img));

const imgProd = () =>
  gulp.src(`${global.paths.dev.img}**/*.{png,gif,jpg,svg,ico}`)
      .pipe(gulp.dest(global.paths.dist.img))

gulp.task('img:dev', imgDev);
gulp.task('img:prod', imgProd);

module.exports.imgDev = imgDev;
module.exports.imgProd = imgProd;