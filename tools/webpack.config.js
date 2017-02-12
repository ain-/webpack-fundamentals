var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    entry: ["./app"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: "bundle.js"
    },
    watch: true,

    devServer: {
        contentBase: 'public'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json-loader!" + path.resolve('loaders/strip')
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}