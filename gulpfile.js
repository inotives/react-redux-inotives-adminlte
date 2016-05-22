var gulp = require('gulp')
var del = require('del')
var webpack = require('webpack-stream')
var webpackConfig = require('./configs/webpack.config.js')
var nodemon = require('gulp-nodemon')

// TASK: delete JS in build directory
gulp.task('clean:build', function(){
  del('./dist/js/*')
})

// TASK: build the project
gulp.task("build", ["clean:build"], function(){
  return gulp.src('src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'))
})

// RTASK: Run Server
gulp.task('serve', function(done){
  nodemon({
    exec: "./node_modules/.bin/babel-node ./server.js",
    watch: ['server.js'],
    ext: "js html"
  })
})

// Main default task
gulp.task('default', ['build'], function(){
  gulp.start(['serve']);
})
