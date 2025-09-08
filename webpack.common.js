const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(process.cwd(), 'script/app.js'),
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /dist/,
                    /public/,
                    /netlify/,
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'index.html'),
            filename: 'index.html',
            favicon: path.join(process.cwd(), 'public/logo/favicon.ico'),
        }),
    ],
}
