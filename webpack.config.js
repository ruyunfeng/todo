const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const ExtractPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";
const config = {
    entry: path.join(__dirname, './src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    
    
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
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
                        name: '[name].[hash].[ext]'
                    },
                }]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:'hello webpack',
            filename:'index.html'
            // template:'./src/index.html'
        })

    ]
}
if(isDev){
    config.module.rules.push({
        test:/\.less$/,
        use:[
            'style-loader',
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
    config.devtool = "#cheap-moudle-eval-source-map"
    config.devServer = {
        contentBase:'./dist',
        hot:true,
        host:'0.0.0.0',
        port:3000,
        overlay:{
            errors:true
        }
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = {
        app: path.join(__dirname, './src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push(
        {
            test:/\.less$/,
            use: ExtractPlugin.extract({
                fallback:'style-loader',
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
    )
    config.plugins.push(
        new ExtractPlugin('styles.[md5:contenthash:hex:8].css'),
        new webpack.optimize.RuntimeChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.RuntimeChunkPlugin({
            name:'runtime'
        })
    )
}
module.exports = config;