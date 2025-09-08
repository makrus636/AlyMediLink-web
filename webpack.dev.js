const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(process.cwd(), 'dist'),
        },
        watchFiles: ['index.html', 'src/**/*'],
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
})
