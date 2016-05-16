/**
 * gulpfile.js
 * @authors weizhongjian
 * @date    2016-04
 * @version 1.0
 */

'use strict';
// 引入组件
// =======================================================
var gulp = require('gulp');

var path = require('path');

var less = require('gulp-less');

var cssmin = require('gulp-minify-css');
// less有各种引入关系,编译后不容易找到对应less文件,所以需要生成sourcemap文件,方便修改
var sourcemaps = require('gulp-sourcemaps');
// 提示错误
var notify = require('gulp-notify');
// 现异常并不终止
var plumber = require('gulp-plumber');

var nodemon = require('gulp-nodemon');

var livereload = require('gulp-livereload');

var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');

var paths = {
    client: [
        // 静态文件发生变化浏览器自动刷新
        // '../localserver/**',
        './app.js',
        './data.json',
        './template/**',
        './template/**/**',
        './assets/**',
        './assets/**/**',
    ],
    server: {
        index: 'app.js'
    }
};

// nodemon配置
var nodemonConfig = {
    script: paths.server.index,
    ignore: ['assets/**','template/**'],
    env: {
        'NODE_ENV': 'development'
    }
};

gulp.task('build:less', function () {
    // 编译src目录下的所有less文件
    gulp.src(['./assets/less/*.less']) 
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        // .pipe(sourcemaps.init())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer]))
        .pipe(less())
        // .pipe(sourcemaps.write())
        // .pipe(cssmin())
        .pipe(gulp.dest('./assets/css'));
});

// 监听文件
gulp.task('livereload', function () {
    livereload.listen();
    gulp.watch(paths.client, function (event) {livereload.changed(event.path);});
    gulp.watch('./assets/less/**', ['build:less']);
});

gulp.task('mon', ['livereload'], function () {
    return nodemon(nodemonConfig);
});

// 本地命令
gulp.task('dev', ['mon']);