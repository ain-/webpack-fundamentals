var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: ["./app"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: "bundle.js"
    },

    plugins: [
        new ExtractTextPlugin("styles.css")
    ],

    devServer: {
        contentBase: 'public'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!autoprefixer-loader!less-loader"
                })
            },
            {
                test: /\.(png|jpg|ttf|eot)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}