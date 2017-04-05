require('webpack');
var glob = require('glob');

module.exports = {
    context: __dirname,
    entry: {
        app: glob.sync(__dirname + '/public/js/**/*.js')
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    },
    module: {
       loaders: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader'
           }
       ]
   }
};
