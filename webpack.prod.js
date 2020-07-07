
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // Application Entry Point
    mode:"production",
    entry: './src/index.js',

  // Application Output Path
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'build.[hash].js'
    },

  // Plugins
    plugins: [
      new HtmlWebpackPlugin({template:"./src/template.html"}),
      new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
      new CleanWebpackPlugin(),
    ],

    // Rules 

  module: {
    rules: [
      //Sass Loader
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader',  'sass-loader', ],
      },

      //HTML Loader
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      // File Loader  
      { 
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'images',
        },
      },
    ],
  },
};
