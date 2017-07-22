const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const webpack = require('webpack'); 

const path = require('path');
const config = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist')
    },
    devtool: "cheap-eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['transform-runtime']
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    ]
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
module.exports = config;