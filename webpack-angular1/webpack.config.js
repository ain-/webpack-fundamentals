var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./index"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'public'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}