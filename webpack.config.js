const HtmlWebpackPlugin  = require("html-webpack-plugin"),
MiniCssExtractPlugin = require("mini-css-extract-plugin"),
 {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
          module : {
           rules : [
            {
             // empaquetamiento de react con babel
             test : /\.js$/i,
             exclude : /node_module/,
             use : {
              loader : "babel-loader",
              options : {
               presets : ["@babel/preset-react"]
              }
             }
            },
            {
             // ||empaquetamiento de html ||
             test :/\.html$/i,
             use : {
              loader : "html-loader",
              options : {
               minimize : true
              }
             }
            },
             {
              test:/\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
             test : /\.(jpg|png|gif|svg|webp)$/i,
             type: 'asset/resource',
              generator: {
              filename: 'assets/[hash][ext][query]'
             }
            }
           ]
          },
          plugins : [
           new HtmlWebpackPlugin({
            template : "src/index.html",
            filename : "index.html"
           }),
           new MiniCssExtractPlugin({
            filename : "main.css"
           }),
           new CleanWebpackPlugin()
          ]
         }