
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
<<<<<<< HEAD
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader'
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }]
  },
=======
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'es2015', 'stage-1']}},
      { test: /\.css$/,loaders: ['style','css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize']},
      { test: /\.scss$/, loaders: ['style','css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]','resolve-url','sass']}
    ]
  },  
<<<<<<< HEAD
  // module: {
  //   loaders: [{
  //     exclude: /node_modules/,
  //     loader: 'babel',
  //     query: {
  //       presets: ['react', 'es2015', 'stage-1']
  //     }
  //   },
  //   {
  //     test: /\.css$/,
  //     loader: ExtractTextPlugin.extract(
  //       combineLoaders([{
  //         loader: 'css-loader',
  //           query: {
  //             modules: true,
  //             localIdentName: '[name]__[local]___[hash:base64:5]'
  //           }
  //       }])
  //     )
  //   }]
  // },
>>>>>>> livedata
=======
>>>>>>> new_layout
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
  new ExtractTextPlugin('styles.css'),
  ]
};