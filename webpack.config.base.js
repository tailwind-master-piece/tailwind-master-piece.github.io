// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebPackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelRules = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

const typeScriptRules = {
  test: /\.tsx?$/,
  use: 'babel-loader',
  exclude: /node_modules/,
};

const cssRules = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[contentHash].js',
  },
  module: {
    rules: [babelRules, typeScriptRules, cssRules],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json', '.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/assets/styles.css',
      chunkFilename: 'styles.css',
    }),
    new HtmlWebPackPlugin({
      title: 'swat neo',
      template: './public/index.html',
    }),
  ],
};
