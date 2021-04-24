const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  
  devServer: {
    port: 3000,
    watchContentBase: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env'
                  ]
                ]
              }
            }
          }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.react.js']
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeRedundantAttributes: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true
      },
      inject: true
    })
  ]
}