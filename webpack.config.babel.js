import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    library: 'ReactMDL',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  plugins: [
    new ExtractTextPlugin('/app.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        //loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
        loaders: ["style", "css", "sass"],
        include: path.join(__dirname, 'src')
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
        test: require.resolve('material-design-lite/material.min'),
        loader: 'exports?componentHandler'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=1000000'
      }
    ]
  },
  bail: true
};
