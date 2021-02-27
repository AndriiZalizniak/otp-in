'use strict';

const gulp = require('gulp');
const scssProd = require('./styles').scssProd;
const jsProd = require('./scripts').jsProd;
const htmlProd = require('./html').htmlProd;
const imgProd = require('./img').imgProd;
const fontsProd = require('./fonts').fontsProd;
const assetsProd = require('./assets').assetsProd;
const cleanDir = require('./clean').cleanDir.bind(null, global.paths.dist.distPath);

gulp.task('build', gulp.series(cleanDir, gulp.parallel(htmlProd, assetsProd, jsProd, scssProd, imgProd), fontsProd));