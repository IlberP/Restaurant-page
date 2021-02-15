const path = require('path');
const webpack = require('webpack')


module.exports = {
    entry: ['webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
        './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080'
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        hot: true
    },
};