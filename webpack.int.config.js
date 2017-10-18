var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require("./webpack.config.js");

config.devtool = false;

config.output.publicPath = '/area/';

config.plugins.unshift(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production'),
            'SERVER': JSON.stringify('development')
        }
    }));

config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            screw_ie8: true,
            warnings: false
        },
        comments: false
    }),
    new HtmlWebpackPlugin({
        title: 'iFacture',
        filename: 'index.html',
        template: './src/index-prod.html',
        favicon: './src/favicon.ico',
        inject: 'body'
    })
);

module.exports = config;
