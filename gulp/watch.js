'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const historyFallback = require('connect-history-api-fallback');
const scssDev = require('./styles').scssDev;
const jsDev = require('./scripts').jsDev;
const htmlDev = require('./html').htmlDev;
const imgDev = require('./img').imgDev;
const fontsDev = require('./fonts').fontsDev;
const assetsDev = require('./assets').assetsDev;
const cleanDir = require('./clean').cleanDir.bind(null, global.paths.build.buildPath);
const reload = browserSync.reload;

const hotReload = (done) => { reload(); done(); };

const initBrowserSync = (isSPA = false) => {
  const middl = isSPA ? [ historyFallback() ] : [];

  browserSync.init({
    notify: false,
    server: {
      baseDir: global.paths.build.buildPath
    },
    middleware: middl
    // https: true,
    // tunnel: true,
    // scrollElementMapping: ['main', '.mdl-layout'], 
    // port: 3000
  });

};

const watchers = () => {
    gulp.watch(`${global.paths.dev.scss}**/*.scss`, gulp.series(scssDev, hotReload));
    gulp.watch(`${global.paths.dev.js}**/*.js`, gulp.series(jsDev, hotReload));
    gulp.watch(`${global.paths.dev.html}**/*.{html,nj}`, gulp.series(htmlDev, hotReload));
};

const watch = () => {
  initBrowserSync();

  watchers();
};
const spa = () => {
  initBrowserSync(true);

  watchers();
};

gulp.task('watch', watch);
gulp.task('default', gulp.series(cleanDir, gulp.parallel(scssDev, jsDev, htmlDev, assetsDev, imgDev,fontsDev), watch));
gulp.task('spa', gulp.series(cleanDir, gulp.parallel(scssDev, jsDev, htmlDev, assetsDev, imgDev,fontsDev), spa));

module.exports.watch = watch;
module.exports.spa = spa;