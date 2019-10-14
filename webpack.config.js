var webpack = require('webpack')
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  stats: "minimal",
  output: {
    path: `${__dirname}/public/js`,
    filename: "[name].js",
    // sourceMapFilename: '[name].[hash:8].map',
    publicPath: "/js/",
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    host: 'localhost',
    port: 3000,
    hot: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};