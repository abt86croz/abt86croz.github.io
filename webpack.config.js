const webpack = require('webpack')

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },


  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader?attrs[]=video:src' },
      { test: /\.(mov|mp4)$/, loader: 'url-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader', 'eslint-loader'] },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { minimize: true } }],
      },
      {
        test: /\.(pdf|jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
      },
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
}
