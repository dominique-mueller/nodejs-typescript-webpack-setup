const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
