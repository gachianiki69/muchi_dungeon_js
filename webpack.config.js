const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'src/index.html'
            }
        )
    ],
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    performance: {
        maxEntrypointSize: 1048576,
        maxAssetSize: 1048576
    }
};
