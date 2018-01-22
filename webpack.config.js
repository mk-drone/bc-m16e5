let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let OptimizeJsPlugin = require('optimize-js-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new OptimizeJsPlugin({
        //     sourceMap: false
        // })
    ]
}