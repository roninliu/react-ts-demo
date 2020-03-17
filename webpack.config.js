const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/assets/app.ts',
  output: {
    path: path.resolve(__dirname, 'web/static'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 这里面的template是模板的位置，title是模板渲染的变量 htmlWebpackPlugin.options.title
    new HtmlWebpackPlugin({
      title: 'test',
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
}
