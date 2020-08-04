const path = require('path');
const createVueLoaderOptions = require('./vue-loader.config.js');

const isDev = process.env.NODE_ENV === "development";
const config = {
    mode: process.env.NODE_ENV || 'development',
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.resolve(__dirname,'../dist'),
        publicPath: '/public/'
    },
    module:{
        rules:[ 
            {
                test:/\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            // {
            //     test:/\.js$/,
            //     loader:'babel-loader',
            //     exclude:/node_modules/
            // },
            {
                test:/\.(htm|html)/,
                use:['html-withimg-loader','html-loader']
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif|webp)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'resources/[path][name].[hash:8].[ext]'
                    },
                }]
            }
        ]
    }
}

module.exports = config;