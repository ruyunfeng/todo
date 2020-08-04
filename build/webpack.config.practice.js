const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');


const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env' : {
            NODE_ENV : '"development"'
        }
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
]

const devServer = {
    contentBase:'../dist',
    hot:true,
    host:'0.0.0.0',
    port:8080,
    overlay:{
        errors:true
    }
}
let config

config = merge(baseConfig,{
    entry: path.join(__dirname,'../practice/index.js'),
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
    resolve:{
        alias:{
            'vue': path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'template.html')
        })
        // new webpack.NoEmitOnErrorsPlugin()
    ])
})
module.exports = config;