const path = require('path');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
// const files = require('./multiFile')
// console.log(files.outPutsProd);
const prodConfig = {
    mode:'production',
    devtool:'cheap-module-source-map',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].[chunkhash:6].js'  
    }
}
module.exports = merge(commonConfig,prodConfig)