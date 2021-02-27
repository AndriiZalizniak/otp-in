'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

global.paths = {
  root: __dirname,
  dev: {
    devPath: '/src/dev/',
    html: './src/dev/html/',
    scss: './src/dev/scss/',
    js: './src/dev/js/',
    img: './src/dev/images/',
    fonts: './src/dev/fonts/',
    svg: './src/dev/svg/',
    assets: './src/dev/assets/',
    webp: {
      input: './src/dev/to-webp/input/',
      output: './src/dev/to-webp/output/'
    }
    // 'cssVend': './src/dev/vendor-css/',
    // 'jsVend': './src/dev/vendor-js/',
  },
  build: {
    buildPath: './src/build',
    html: './src/build/',
    css: './src/build/styles/',
    js: 'src/build/scripts/',
    img: './src/build/images/',
    fonts: './src/build/fonts/',
    assets: './src/build/assets/'
  },
  dist: {
    distPath: 'dist',
    html: 'dist',
    css: 'dist/styles',
    js: 'dist/scripts',
    img: 'dist/images',
    fonts: 'dist/fonts',
    assets: './dist/assets'
  },
  webpackConfg: `${__dirname}/webpack/`
};

requireDir('./gulp', { recurse: false });