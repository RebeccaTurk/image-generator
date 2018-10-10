
// const http = require('http');
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//webpack.config.js

// const path = require('path');
// const nodeExternals = require('webpack-node-externals');

// module.exports = {
//     entry: './src/client/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     externals: [nodeExternals()] // in order to ignore all modules in node_modules folder from bundling

//         // xmlhttprequest: '{XMLHttpRequest: XMLHttpRequest}'
//         // XMLHttpRequest: {XMLhttprequest: 'xmlhttprequest'},
//         // xhr: {XMLHttpRequest: 'xmlhttprequest'}
// };