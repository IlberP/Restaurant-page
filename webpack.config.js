const path = require('path');

module.exports = {
    entry: './src/index.js',
    // The line below is new! 
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080'
    }
};