const path = require('path');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },

    resolve:{
        extensions: ['.js'],
    },
    module:{
        rules:[
            {
            test: /\.js?$/,
            exclude: "/node_modules",
            use:{
                loader: 'babel-loader'
                }
            },
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
            assetModuleFilename: 'assets/hash/[hash][ext][query]'
        }),
        new CopyWebpackPlugin({
            patterns: [{
            from: './src/styles/styles.css',
            to: ''
            }]
        }),
        /*new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),*/
    ]
}