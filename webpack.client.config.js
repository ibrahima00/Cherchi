let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ['./client/App', './client/scss/main.scss'],
    output: {
        filename: path.join('public', 'js', 'app.js')
    },
    target: "web",
    resolve: {
        extensions: ['.js','.jsx','.scss','.css']
    },
    module: {

        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?importLoaders=1']
                })
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({use:['css-loader', 'sass-loader']})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'public/css/[name].bundle.css',
            allChunks: true
        })
    ]
};