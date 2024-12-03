const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./frontend/src/main.js",
    index: "./frontend/src/pages/index/index.js",
    characters: "./frontend/src/pages/characters/characters.js",
    characterSheets: "./frontend/src/pages/characterSheets/characterSheets.js",
    login: "./frontend/src/pages/login/login.js",
    registration: "./frontend/src/pages/registration/registration.js",
    forgotUsername: "./frontend/src/pages/forgotUsername/forgotUsername.js",
    forgotPassword: "./frontend/src/pages/forgotPassword/forgotPassword.js",
    resetPassword: "./frontend/src/pages/resetPassword/resetPassword.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        type: "asset/resource", // Use Webpack's built-in asset handling
        generator: {
          filename: "assets/[name][ext]", // Output files to 'assets' folder
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/components/header/header.html",
      filename: "header.html",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/components/footer/footer.html",
      filename: "footer.html",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/index/index.html",
      filename: "index.html",
      chunks: ["main", "index"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/characters/characters.html",
      filename: "characters.html",
      chunks: ["main", "characters"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/characterSheets/characterSheets.html",
      filename: "characterSheets.html",
      chunks: ["main", "characterSheets"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/login/login.html",
      filename: "login.html",
      chunks: ["main", "login"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/registration/registration.html",
      filename: "registration.html",
      chunks: ["main", "registration"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/forgotUsername/forgotUsername.html",
      filename: "forgotUsername.html",
      chunks: ["main", "forgotUsername"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/forgotPassword/forgotPassword.html",
      filename: "forgotPassword.html",
      chunks: ["main", "forgotPassword"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/pages/resetPassword/resetPassword.html",
      filename: "resetPassword.html",
      chunks: ["main", "resetPassword"],
      favicon: "./frontend/src/assets/images/icons/SovereignQuest.png",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};

console.log("Webpack output path:", path.resolve(__dirname, "dist"));
console.log("Entry points:", module.exports.entry);
