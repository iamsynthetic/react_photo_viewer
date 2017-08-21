const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

const html = new HtmlPlugin({ template: "./src/app.html" });
const outputPath = path.resolve(__dirname, "build");

module.exports = {
  entry: {
    application: "./src/app.js"
  },

  output: {
    filename: "[name].[chunkhash].js",
    path:outputPath
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [html]
};