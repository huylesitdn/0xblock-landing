const path = require("path");

const webpackConfig = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          compact: true,
        },
      },
      {
        test: /.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|mp3|pdf|webm|txt)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|mp3|pdf|webm|txt)$/,
        type: "assets",
        generator: {
          filename: "static/chunks/[path][name].[hash][ext]",
        },
      },
    ],
  },

  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/": {
        target: "http://localhost:3000",
      },
    },
    historyApiFallback: {
      index: "/",
    },
  },

  resolve: {
    modules: ["./src", "./node_modules"],
  },

  mode: "development",
  devtool: "source-map",
};

module.exports = webpackConfig;
