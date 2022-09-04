const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
        fs: false
    }
  },
  devServer: {
    static: "./dist",
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  }
};