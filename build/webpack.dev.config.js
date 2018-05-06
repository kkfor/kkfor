const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    main: './examples/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  }
})