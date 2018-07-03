const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  // devtool: 'source-map',
  mode: 'development',
  entry: {
    main: './examples/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/index.html')
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8070',
    noInfo: true,
    // hot: true,
    // inline: true,
    // hotOnly: true
  }
})