const loaderUtils = require('loader-utils')
module.exports = function (source){
    const options = loaderUtils.getOptions(this)
    const res =  source.replace('chris',options.name)

    this.callback(
        null,
        res
    );
}