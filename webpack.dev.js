const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    resolve: {
        alias: {
        'vue$': 'vue/dist/vue.esm.js'
        }
    }
});