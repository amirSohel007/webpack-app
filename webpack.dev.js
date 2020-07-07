const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Application Entry Point
  mode: "development",
  entry: "./src/index.js",

  // Application Output Path
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  //Plugins
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],

  //Rules
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      //HTML Loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // File Loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images",
        },
      },
    ],
  },
};
