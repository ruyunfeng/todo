const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:'./dist',
        hot:true,
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(htm|html)/,
                use:['html-withimg-loader','html-loader']
            },
            {
                test:/\.(png|jpg|svg|gif|webp)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false, 
                    },
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'hello webpack',
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
}