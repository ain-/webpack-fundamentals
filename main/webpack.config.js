var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./app"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    watch: true,

    devServer: {
        contentBase: 'public'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "jshint-loader"
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}