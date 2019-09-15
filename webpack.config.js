const path = require('path');
const entryFile = path.resolve(__dirname, 'client', 'src', 'index.js');
const outputDir = path.resolve(__dirname, 'client', 'dist');

const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', entryFile],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: outputDir
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
<<<<<<< HEAD
        test: /\.(pdf|jpg|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader'
          },
        ]
      },
=======
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader?limit=100000'
          }
        ]
      }
>>>>>>> aa970c322be692456f61e5c3c597b2e355c1a2b7
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './client/dist',
    hot: true,
    proxy: {
      '/home': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
      '/rules': 'http://localhost:3000'
    }
  }
};