const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// root path for this project
const ROOT = __dirname;

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, './index.html'),
      publicPath: '/'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: 'file-loader',
      }
    ],
  },
};
