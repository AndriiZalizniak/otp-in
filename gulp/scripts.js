'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackDevCofig = require(`${global.paths.webpackConfg}webpack.devconfig.js`);
const webpackProdCofig = require(`${global.paths.webpackConfg}webpack.prodconfig.js`);
const fs = require('fs');

const jsDev = () => webpackStream(getWebPackConfig(webpackDevCofig), webpack)
                    .pipe(gulp.dest(global.paths.build.js));

const jsProd = () => webpackStream(getWebPackConfig(webpackProdCofig), webpack)
                    .pipe(gulp.dest(global.paths.dist.js));

function getWebPackConfig(config) {
  config.entry = getFilesInFolder();
  // console.log(config);
  // let obj = {};
  return {...config};
};

function getFilesInFolder() {
  return fs.readdirSync(`${global.paths.root}${global.paths.dev.devPath}js/`)
    .filter(file => /.js$/.test(file))
    .reduce((acc, file) => (acc[file.split('.js')[0]] = `${global.paths.root}${global.paths.dev.devPath}js/${file}`, acc), {});
};

gulp.task('js:dev', jsDev);
gulp.task('js:prod', jsProd);

module.exports.jsDev = jsDev;
module.exports.jsProd = jsProd;