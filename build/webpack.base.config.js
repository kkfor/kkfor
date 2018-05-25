const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const styleLoader = {
  loader: 'style-loader',
  // options: {
  //   sourceMap: true
  // }
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true
  }
}

const sassLoader = [
  styleLoader,
  cssLoader,
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  }
]

const config =  {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [styleLoader, cssLoader],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [...sassLoader],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      // '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = config