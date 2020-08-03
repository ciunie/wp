const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const files = require('./multiFile')

console.log(files.entryFiles)
console.log(files.pluginAll);
module.exports = {
    // entry:{
    //     'main':'./src/index.js'
    // },
    entry: files.entryFiles,
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:path.resolve(__dirname,'../loaders/replaceLoader.js'),
                    options:{
                        name:'laney'
                    }
                }]
            },
    //         {
    // 　　　　　　test: /\.(png|jpg)$/,
    // 　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]&esModule=false',//图片被打包在images目录下并在原图片名前加上8位 hash 值
    //         },
            {
                test:/\.(html|htm)$/i,
                loader: 'html-withimg-loader'
            },

            {
                test:/\.png$/,
                use:{
                    loader:'file-loader',
                    options:{
                        esModule:false
                    }
                }
            },
            // {
            //     test: /\.(png|jpg)$/,   //配置css中的图片，html中的图片示例在下面
            //     loader: 'url-loader?limit=8192'//图片被打包在主目录下
            // },
            {
                test:/\.(eot|ttf|svg|woff|woff2)$/,
                use:{
                    loader:'file-loader'
                }
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                            // modules:true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader'
                    },

                ]
            }
            
            
            

        ]
    },
    // output:{
    //     path:path.resolve(__dirname,'../dist'),
    //     filename:'[name].[hash:6].js'
        
    // },
    // plugins:[new HtmlWebpackPlugin({
    //     template:'src/index.html'
    // }),new CleanWebpackPlugin({
    //     root:path.resolve(__dirname,'../')
    // })]
    plugins:files.pluginAll
}