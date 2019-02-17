/* global require, module, __dirname */
const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, 'index.html'),
    }),
  ],
}