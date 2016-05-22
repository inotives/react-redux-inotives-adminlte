const path                = require('path')
const webpack             = require('webpack')
const merge               = require('webpack-merge')
const HtmlWebpackPlugin   = require('html-webpack-plugin')


/* CONSTANT */
const TARGET = process.env.npm_lifecycle_event; // get the command of npm lifecycle event such as `npm run build` result >> TARGET = 'build'
const PATHS = {
  src: __dirname + '/src',
  bower: __dirname + '/bower_components',
  adminlte: __dirname + '/node_modules/admin-lte',
  libs: __dirname + '/libs',
  style: __dirname + '/src/styles'
}
const HTML_GENERATOR_OPTIONS = {
  title: 'ReactReduxAdminLTE',
  template: PATHS.src + '/views/index.ejs',
  inject: 'body' //inject all the scripts to body
}

//set babel env to npm lifecycle
process.env.BABEL_ENV = TARGET;

var config = {
  resolve: {
    alias: {
      jquery: PATHS.adminlte + '/plugins/jQuery/jQuery-2.2.0.min.js',
      bootstrapJS: PATHS.adminlte + '/bootstrap/js/bootstrap.min.js',
      bootstrapCSS: PATHS.adminlte + '/bootstrap/css/bootstrap.min.css',
      animateCSS: PATHS.bower + '/animate.css/animate.min.css',
      fontawesomeCSS: PATHS.bower + '/font-awesome/css/font-awesome.min.css'
    }
  },
  entry {
    app: ['./src'],
    vendors: [],
    plugins: []
  }
}
