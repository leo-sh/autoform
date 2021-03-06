const resolve = require('path').resolve
const webpack = require('webpack')
const url = require('url')
const publicPath = ''
const path = require('path');

module.exports = (options = {}) => ({
    entry: {
        index: './autoform_component_lib/index.js'
    },
    output: {
        path: resolve(__dirname, '../autoform_component_lib/dist/lib'),
        filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
        chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath,
        library: 'autoformlib',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: '#source-map',
    // externals: {
    //   "@hfe/autoform":"window.Vue.$autoform"
    // },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['index']
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '~': resolve(__dirname),
            'autoform': path.resolve(__dirname, '../autoform')
        }
    }
})