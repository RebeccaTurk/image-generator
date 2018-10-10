const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        xmlhttprequest: '{XMLHttpRequest: XMLHttpRequest}'
    }
};