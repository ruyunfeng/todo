const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge');
const ExtractPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const isDev = process.env.NODE_ENV === "development";

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env' : {
            NODE_ENV : isDev ? '"development"' : '"production"'
        }
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
]

const devServer = {
    contentBase:'../dist',
    hot:true,
    host:'0.0.0.0',
    port:3000,
    overlay:{
        errors:true
    },
    historyApiFallback:{
        index: '/public/index.html'
    }
}
let config

if(isDev){
    config = merge(baseConfig,{
        devtool: "#cheap-moudle-eval-source-map",
        module:{
            rules:[
                {
                    test:/\.less$/,
                    oneOf: [
                        // 这里匹配 `<style module>`
                        {
                          resourceQuery: /module/,
                          use: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    localsConvention: 'camelCase',
                                    modules: {
                                        mode: 'local',
                                        // camelCase: true, 
                                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader : 'postcss-loader',
                                options:{
                                    sourceMap: true,
                                }
                            },
                            'less-loader'
                          ]
                        },
                        // 这里匹配普通的 `<style>` 或 `<style scoped>`
                        {
                            use: [
                                'vue-style-loader',
                                {
                                    loader : 'css-loader',
                                    // options: {
                                    //     modules: {
                                    //         localIdentName: '[path][name]__[local]--[hash:base64:5]'
                                    //     }
                                    // }
                                },
                                {
                                    loader : 'postcss-loader',
                                    options:{
                                        sourceMap: true,
                                    }
                                },
                                'less-loader'
                            ]
                        }
                    ]
                    // use:[
                    //     'vue-style-loader',
                    //     {
                    //         loader : 'css-loader',
                    //         options: {
                    //             localsConvention: 'camelCase',
                    //             modules: {
                    //                 mode: 'local',
                    //                 // camelCase: true, 
                    //                 localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    //             }
                    //         }
                    //         // options: {
                    //         //     modules: {
                    //         //         localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    //         //     }
                    //         // }
                    //     },
                    //     {
                    //         loader : 'postcss-loader',
                    //         options:{
                    //             sourceMap: true,
                    //         }
                    //     },
                    //     'less-loader'
                    // ]
                }
            ]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
            // new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config = merge(baseConfig,{
        entry:{
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module:{
            rules: [
                {
                    test:/\.less$/,
                    use: ExtractPlugin.extract({
                        fallback:'vue-style-loader',
                        use:[
                            'css-loader',
                            {
                                loader : 'postcss-loader',
                                options:{
                                    sourceMap: true
                                }
                            },
                            'less-loader'
                        ]
                    })
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('styles.[md5:contenthash:hex:8].css'),
            new webpack.optimize.RuntimeChunkPlugin({
                name:'vendor'
            }),
            new webpack.optimize.RuntimeChunkPlugin({
                name:'runtime'
            })
        ])
    })
}
module.exports = config;