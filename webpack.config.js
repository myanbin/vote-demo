var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png)$/, loader: 'file-loader?name=img/[name].[hash].[ext]' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
