import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './example/index'
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: './example',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
  resolve: {
    alias:{
      rematerial: path.resolve('./index.js'),
    },
    extensions: [ '', '.js' ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  bail: true
};
