import path from 'path';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    example: path.join(__dirname, './index.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname
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
    ]
  },
  bail: true
};
