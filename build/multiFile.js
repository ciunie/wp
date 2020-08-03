var path = require('path');
var glob = require('glob');
var htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
var DIST_PATH = path.resolve(__dirname,'../dist');
var SRC_PATH = path.resolve(__dirname,'../src');
var pluginAll = [new CleanWebpackPlugin({
    root:path.resolve(__dirname,'../')
})]; //放所有插件
var entryFiles = {};
var outPutsProd = {};
var outPutsDev = {};
var files = glob.sync(path.join(SRC_PATH,'/js/**/*.js'));
// console.log(files)
files.forEach(function(file,index){//得到所有js文件的一个集合
    var subkey = file.match(/src\/js\/(\S*)\.js/)[1];
    entryFiles[subkey] = file;
})
// console.log(entryFiles);


var pages = glob.sync(path.join(SRC_PATH,'/pages/**/*.html'))//找到所有html文件
pages.forEach(function(page,index){
    var pagestr = page.match(/\/src\/pages\/(\S*)\.html/);//找到文件的名字
    var name = pagestr[1];
    console.log(name)
    var plug = new htmlWebpackPlugin({//打包html文件
            filename:path.join(DIST_PATH,name+'.html'),
            title:'测试'+index,
            template:SRC_PATH +'/pages/'+ name+'.html',
            inject:true,//body head true false js文件位于html里面的位置
            hash:true,
            minify:false, //是否压缩
            chunks:[name]//需要引入的js
        })
    pluginAll.push(plug);
    // outPutsProd.path=`${DIST_PATH}/${name}`
    // outPutsProd.filename='[name].[chunkhash:8].js'
    // outPutsDev.path=`${DIST_PATH}/${name}`
    // outPutsDev.filename='[name].[hash:8].js'

})
exports.entryFiles = entryFiles;
exports.pluginAll = pluginAll;
// exports.outPutsProd = outPutsProd;
// exports.outPutsDev = outPutsDev;



