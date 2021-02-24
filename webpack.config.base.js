// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebPackPlugin = require('html-webpack-plugin');

const babelRules = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

const typeScriptRules = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
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
    extensions: ['.tsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Portfolio',
      template: './public/index.html',
    }),
  ],
};
