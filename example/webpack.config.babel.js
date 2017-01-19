import path from 'path';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './example/index'
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './example',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192&name=images/[name]-[hash:6].[ext]'
      },
    ]
  },
  bail: true
};
