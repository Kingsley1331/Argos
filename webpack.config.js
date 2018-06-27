const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client-side/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        secure: false
      }
    }
  }
};
