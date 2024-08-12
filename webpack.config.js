const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/renderer/index.tsx',
    output: {
      filename: 'renderer.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/renderer/index.html',
      }),
    ],
    target: 'web',
  },
  {
    mode: 'development',
    entry: {
      main: './src/main/main.ts',
      preload: './src/main/preload.js', // Add preload.js entry point
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    target: 'node',
    externals: {
      electron: 'require("electron")', // Ensure Electron is marked as external
    },
  },
];
