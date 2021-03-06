const path = require('path');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const webpack = require('webpack')
// const files = require('./multiFile')
// console.log(files.outPutsDev);
const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:'../dist',
        open:true,
        hot:true,
        hotOnly:true,
        publicPath:'/'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/[name].[hash:6].js',
        publicPath:'../'  
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],
    optimization:{
        usedExports:true
    }
}
module.exports = merge(commonConfig,devConfig)